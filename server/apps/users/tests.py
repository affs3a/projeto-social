from django.test import TestCase
from rest_framework.test import APIRequestFactory
from rest_framework import status
from .models import User
from . import views


class UserTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        User.objects.create_user(
            name='Renan',
            username='renan',
            password='renan',
            email='renan@test.com',
            role=3,
        )

    def setUp(self):
        print("--> Setup: created test database.")
        self.client = APIRequestFactory()

    def test_get_all_users(self):
        print("--> HTTP(GET) api/users: get all users.")
        request = self.client.get('/api/users/')
        view = views.UserList.as_view()
        response = view(request)
        self.assertIsNotNone(response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_user(self):
        print("--> HTTP(PUT) api/users: create a new user.")
        request_data = {
            "name": "teste",
            "username": "teste",
            "password": "teste",
            "email": "teste@teste.com",
            "role": 3
        }
        request = self.client.put('/api/users/', request_data, format="json")
        view = views.UserList.as_view()
        response = view(request)
        self.assertIsNotNone(response.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_single_user(self):
        print("--> HTTP(GET) api/users: get single user.")
        request = self.client.get('/api/users/1')
        view = views.UserList.as_view()
        response = view(request)

        self.assertIsNotNone(response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)