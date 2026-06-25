from django.contrib import admin
from .models import Profile,Delivery


class DeliveryInline(admin.StackedInline):
    model = Delivery
    extra = 1


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    inlines = [DeliveryInline]
    list_display = (
        "full_name",
        "title",
        "email",
        "location"
    )
