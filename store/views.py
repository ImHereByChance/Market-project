from django.shortcuts import render
from django.http import JsonResponse
import json

from .models import *



def store(request):
    products = Product.objects.all()
    context = {'products': products,}
    return render(request, 'store/store.html', context)


def detail(request):
    context = {}
    return render(request, 'store/detail.html', context)


def cart(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        items = order.orderitem_set.all()
    else:
        items = []

    context = {'items': items, 'order': order}
    return render(request, 'store/cart.html', context)


def checkout(request):
    context = {}
    return render(request, 'store/checkout.html', context)


def updateItem(request):
    data = json.loads(request.body)
    productId = data['productId']
    action = data['action']
    
    customer = request.user.customer
    product = Product.objects.get(id=productId)
    order, created = Order.objects.get_or_create(customer=customer, complete=False)

    # if orderItem doesn't exists, we create new one, if don't - 
    # we just change its quantity parameter using logic represented below 
    orderItem, created = OrderItem.objects.get_or_create(order=order, product=product)

    if action == 'add':
        orderItem.quantity += 1
    elif action == 'remove':
        orderItem.quantity -= 1
    orderItem.save()

    if orderItem.quantity < 1:
        orderItem.delete()

    return JsonResponse(f'Item "{orderItem.product.name}" was processed', safe=False)




