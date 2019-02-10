from django.urls import path, re_path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('signup.html', views.signup, name='signup'),
    path('signup_submit', views.signup_submit, name='signup_submit')
]  + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
