from django.contrib import admin
from .models import Category, Product, UserProfile, Order, OrderItem, College ,Course, Section, Lecture

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(UserProfile)
admin.site.register(Order)
admin.site.register(OrderItem)


admin.site.register(Course)
admin.site.register(Section)
admin.site.register(Lecture)
#admin.site.register(College)

@admin.register(College)
class CollegeAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'fees', 'rating') # Table view mein kya dikhega
    search_fields = ('name', 'location') # Search bar enable karne ke liye
