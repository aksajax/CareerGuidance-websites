from django.urls import path
from . import views
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.views import TokenRefreshView
urlpatterns = [
  path('register/', views.register_view),
  # path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
  path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
  path('products/', views.get_products),
  path('products/<int:pk>/', views.get_product),
  path('categories/', views.get_categories),
  path('cart/', views.get_cart),
  path('cart/add/', views.add_to_cart),
  path('cart/remove/', views.remove_from_cart),
  path('cart/update/', views.update_cart_quantity),
  path('orders/create/', views.create_order),
  # urls.py
  path('chatbot/', views.chatbot_redirect),
  path('chat/', views.website_chatbot, name='chatbot'),


  # Get all colleges & Add new college
  path('colleges/', views.get_colleges, name='get_colleges'),
  path('colleges/add/', views.add_college, name='add_college'),
    
  # Operations on a single college (Get, Update, Delete)
  path('colleges/<int:pk>/', views.get_college, name='get_college'),
  path('colleges/update/<int:pk>/', views.update_college, name='update_college'),
  path('colleges/delete/<int:pk>/', views.delete_college, name='delete_college'),

]