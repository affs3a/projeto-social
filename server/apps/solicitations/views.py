from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import status, NotFound
from .serializers import SolicitationSerializer
from .models import Solicitation


class SolicitationList(APIView):
    def get(self, request, format=False):
        queryset = Solicitation.objects.all()
        serializer = SolicitationSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, format=False):
        serializer = SolicitationSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class SolicitationDetails(APIView):
    def get_solicitation(self, solicitation_id):
        try:
            return Solicitation.objects.get(pk=solicitation_id)
        except Solicitation.DoesNotExist:
            raise NotFound()

    def get(self, request, solicitation_id, format=False):
        Solicitation = self.get_solicitation(solicitation_id)
        serializer = SolicitationSerializer(Solicitation)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, solicitation_id, format=False):
        Solicitation = self.get_solicitation(solicitation_id)
        Solicitation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
