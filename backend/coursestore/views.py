import os
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User
from .serializers import RegisterSerializer, UserSerializer
from rest_framework import status
from .models import Product, Category, Cart, CartItem, Order, OrderItem ,College
from .serializers import ProductSerializer, CategorySerializer, CartSerializer, CartItemSerializer,CollegeSerializer
from django.shortcuts import redirect
from groq import Groq 
# backend/views.py (Bas ye check karlo ki ye part aisa hi hai)


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        # Login ke waqt ye data extra jayega
        data['username'] = self.user.username
        data['email'] = self.user.email
        # data['first_name'] = self.user.first_name # Extra details agar chahiye
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer




@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_product(request, pk):
    try:
        product = Product.objects.get(id=pk)
        serializer = ProductSerializer(product, context = {'request': request})
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response({'error': 'Product not found'}, status=404)

@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_cart(request):
    cart, created = Cart.objects.get_or_create(user=request.user)
    serializer = CartSerializer(cart)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_to_cart(request):
    product_id = request.data.get('product_id')
    product = Product.objects.get(id=product_id)
    cart, created = Cart.objects.get_or_create(user=request.user)
    item, created = CartItem.objects.get_or_create(cart=cart, product=product)
    if not created:
        item.quantity += 1
        item.save()
    return Response({'message': 'Product added to cart',"cart":CartSerializer(cart).data})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_cart_quantity(request):
    item_id = request.data.get('item_id')
    quantity = request.data.get('quantity')
   
    if not item_id or quantity is None:
        return Response({'error': 'Item ID and quantity are required'}, status=400)
    
    try:
        item = CartItem.objects.get(id=item_id)
        if int(quantity) < 1:
            item.delete()
            return Response({'error': 'Quantity must be at least 1'}, status=400)
        
        item.quantity = quantity
        item.save()
        serializer = CartItemSerializer(item)
        return Response(serializer.data)
    except CartItem.DoesNotExist:
        return Response({'error': 'Cart item not found'}, status=404)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def remove_from_cart(request):
    item_id = request.data.get('item_id')
    CartItem.objects.filter(id=item_id).delete()
    return Response({'message': 'Item removed from cart'})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_order(request):
    try:
        data = request.data
        name = data.get('name')
        address = data.get('address')
        phone = data.get('phone')
        payment_method = data.get('payment_method','COD')

        #validate Phone Number
        if not phone.isdigit() or len(phone) < 10:
            return Response({'error': 'Invalid phone number'}, status=400)
        
        # Get user's cart
        cart , created = Cart.objects.get_or_create(user=request.user)
        if not cart.items.exists():
            return Response({'error': 'Cart is empty'}, status=400)
        
        total = sum([item.product.price * item.quantity for item in cart.items.all()])

        order = Order.objects.create(user = request.user, total_amount=total)

        for item in cart.items.all():
            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price=item.product.price
            )
        # Clear the cart
        cart.items.all().delete()
        return Response({'message': 'Order created successfully', 'order_id': order.id})
    except Exception as e:
        return Response({'error': str(e)}, status=500)
  
@api_view(['POST'])
@permission_classes([AllowAny])
def register_view(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response({"message": "User created successfully", "user": UserSerializer(user).data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def chatbot_redirect(request):
    return redirect("http://127.0.0.1:8501")







@api_view(['GET'])
def get_colleges(request):
    colleges = College.objects.all()
    serializer = CollegeSerializer(colleges, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def get_college(request, pk):
    try:
        college = College.objects.get(id=pk)
        serializer = CollegeSerializer(college, context = {'request': request})
        return Response(serializer.data)
    except College.DoesNotExist:
        return Response({'error': 'College not found'}, status=404)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_college(request):
    serializer = CollegeSerializer(data=request.data)
    if serializer.is_valid():
        college = serializer.save()
        return Response({"message": "College added successfully", "college": CollegeSerializer(college).data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_college(request, pk):
    try:
        college = College.objects.get(id=pk)
    except College.DoesNotExist:
        return Response({'error': 'College not found'}, status=404)
    
    serializer = CollegeSerializer(college, data=request.data)
    if serializer.is_valid():
        college = serializer.save()
        return Response({"message": "College updated successfully", "college": CollegeSerializer(college).data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_college(request, pk):
    try:
        college = College.objects.get(id=pk)
        college.delete()
        return Response({"message": "College deleted successfully"})
    except College.DoesNotExist:
        return Response({'error': 'College not found'}, status=404)
    











# @api_view(['POST'])
# @permission_classes([AllowAny])
# def website_chatbot(request):
#     user_query = request.data.get('message')
    
#     if not user_query:
#         return Response({"error": "Message is required"}, status=status.HTTP_400_BAD_REQUEST)

#     # 1. Database se Colleges ka data nikalna (Knowledge Base)
#     colleges = College.objects.all()
#     college_info = ""
#     for c in colleges:
#         college_info += f"College: {c.name}, Location: {c.location}, Fees: {c.fees}, Rating: {c.rating}. "

#     # 2. System Prompt (Website ka context)
#     system_prompt = f"""
#     You are the 'CGP AI Assistant'. 
#     Your job is to help students find colleges from our website.
#     Website Info: Created by Abhishek, Harshita, Didiksha, and Anshu.
#     Available Colleges Data: {college_info}
#     Instruction: Answer only based on the provided data. If a college is not listed, say 'Hume jald hi aur colleges add karenge'. 
#     Be polite and professional.
#     """

#     try:
#         # 3. AI Model Call
#         completion = client.chat.completions.create(
#             model="llama3-8b-8192",
#             messages=[
#                 {"role": "system", "content": system_prompt},
#                 {"role": "user", "content": user_query}
#             ],
#             temperature=0.7,
#         )
        
#         bot_reply = completion.choices[0].message.content
#         return Response({"reply": bot_reply}, status=status.HTTP_200_OK)

#     except Exception as e:
#         return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# API Key
GROQ_KEY = "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" 

@api_view(['POST'])
@permission_classes([AllowAny])
def website_chatbot(request):
    try:
        user_query = request.data.get('message')
        if not user_query:
            return Response({"error": "No message provided"}, status=400)

        # Groq Client setup
        client = Groq(api_key=GROQ_KEY)

        # DB se data nikalna
        colleges = College.objects.all()
        college_list = []
        for c in colleges:
            college_list.append(f"{c.name} in {c.location} (Fees: {c.fees})")
        
        context_data = ", ".join(college_list)

        # AI Call
        completion = client.chat.completions.create(
            model="groq/compound-mini",
            messages=[
                {
                    "role": "system", 
                    "content": f"You are CGP Assistant. Use this data: {context_data}. Be brief."
                },
                {"role": "user", "content": user_query}
            ]
        )

        return Response({"reply": completion.choices[0].message.content})

    except Exception as e:
        # Yeh line aapke terminal mein error print karegi jisse pata chalega problem kya hai
        print("Backend Error:", str(e)) 
        return Response({"error": str(e)}, status=500)