from collections import OrderedDict
from django.test import TestCase
from rest_framework.utils.serializer_helpers import ReturnList
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

        print(response.data)

        self.assertTrue(type(response.data) == ReturnList)
        self.assertIsNotNone(response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
