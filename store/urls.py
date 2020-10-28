from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.store, name='store'),
    path('cart', views.cart, name='cart'),
    path('checkout', views.checkout, name='checkout'),
    path('detail', views.detail, name='detail'),  # пока что один на всех 
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)