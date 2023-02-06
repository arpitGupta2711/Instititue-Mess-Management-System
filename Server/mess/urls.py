from django.urls import path
from .views import home_view,update_menu,giveFeedback,getFeedback
urlpatterns = [
    path('',home_view,name="home"),
    path('update-menu/<int:pk>/',update_menu),
    path('give-feedback/',giveFeedback),
    path('view-feedback/',getFeedback),
]
