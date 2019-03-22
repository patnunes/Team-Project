from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('signup.html', views.signup, name='signup'),
    path('signin.html', views.signin, name='signin'),
    path('profile.html', views.profile, name="profile"),
    path('tweet_template.html', views.tweet_template, name="tweet_template"),
    path('signup_submit', views.signup_submit, name='signup_submit'),
    path('signin_submit', views.signin_submit, name='signin_submit'),
    path('tweet_submit', views.tweet_submit, name='tweet_submit'),
    path('get_tweets', views.get_tweets, name='get_tweets'),
    path('get_more_tweets', views.get_older_tweets, name='get_older_tweets'),
    path('like', views.like, name='like'),
    path('follow', views.follow, name='follow'),
    path('get_info', views.get_info, name='get_info')
]  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
