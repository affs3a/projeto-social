# Use uma imagem base com Python
FROM python:3.12

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /server

# Copie o arquivo de dependências para o diretório de trabalho
COPY . .

# Instale as dependências
RUN pip install --no-cache-dir -r requirements.txt
RUN python manage.py migrate
RUN python devscript.py
# Exponha a porta em que a aplicação vai rodar
EXPOSE 8000

# Comando para iniciar a aplicação
CMD ["python", "manage.py", "runserver"]
