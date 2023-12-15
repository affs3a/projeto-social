from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import status, NotFound
from .serializers import CategorySerialize
from .models import Category


class CategoryList(APIView):
    def get(self, request, format=False):
        queryset = Category.objects.all()
        serializer = CategorySerialize(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, format=False):
        serializer = CategorySerialize(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class CategoryDetails(APIView):
    def get_category(self, category_id):
        try:
            return Category.objects.get(pk=category_id)
        except Category.DoesNotExist:
            raise NotFound()

    def get(self, request, category_id, format=False):
        category = self.get_category(category_id)
        serializer = CategorySerialize(category)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def patch(self, request, category_id, format=False):
        category = self.get_category(category_id)
        serializer = CategorySerialize(category, data=request.data, partial=True)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

    def delete(self, request, category_id, format=False):
        category = self.get_category(category_id)
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

