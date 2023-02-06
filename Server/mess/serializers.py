from rest_framework import serializers
from .models import Menu,Feedback


# class FoodSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=Food
#         fields='__all__'
class MenuSerializer(serializers.ModelSerializer):
    # meal = FoodSerializer( many=True)
    class Meta:
        model=Menu
        fields=['day','time','meal','price']

class FeedbackSerializer(serializers.ModelSerializer):
    pass
