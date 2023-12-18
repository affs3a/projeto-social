from django.http import HttpResponse

def wellcome(request):
    return HttpResponse("Bem vindo a API do sistema Araripe A Serviço!")