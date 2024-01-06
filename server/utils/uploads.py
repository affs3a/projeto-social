from django.core.files.storage import FileSystemStorage
from django.conf import settings
import hashlib
import base64
import json
import io
import os
    
FS = FileSystemStorage()
IMAGES = 'images'

def upload(files_json, to=''):
    files = json.loads(files_json)

    filenames = []

    for file in files:
        extension = file.get('name').split('.')[-1]
        name = hashlib.md5(file.get("name").encode("utf-8")).hexdigest()
        path = os.path.join(to, f'{name}.{extension}')

        decoded_file = io.BytesIO(base64.b64decode(file.get('file').split(',')[1], validate=True))
        archive = FS.save(path, decoded_file)

        filenames.append(FS.url(archive))

    return filenames

def delete(filenames):
    for file in filenames:
        name = file.replace(settings.MEDIA_URL, './')
        if FS.exists(name):
            FS.delete(name)