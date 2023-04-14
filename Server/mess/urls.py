from django.urls import path
from .views import home_view,update_menu,giveFeedback,getFeedback,viewSilverToken,ShowTokens,HaveToken
urlpatterns = [
    path('',home_view,name="home"),
    path('update-menu/<int:pk>/',update_menu),
    path('give-feedback/',giveFeedback),
    path('buy-single-token/',viewSilverToken,name='token'),    
    path('view-feedback/',getFeedback),
    path('show-tokens/',ShowTokens),
    path('have-token/',HaveToken),
]
