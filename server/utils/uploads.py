from django.core.files.storage import FileSystemStorage
import io
import base64
import json
import hashlib
    
FS = FileSystemStorage()

def upload(files_json):
    files = json.loads(files_json)

    filenames = []

    for file in files:
        extension = file.get('name').split('.')[-1]
        name = hashlib.md5(file.get("name").encode("utf-8")).hexdigest()

        decoded_file = io.BytesIO(base64.b64decode(file.get('file').split(',')[1], validate=True))
        archive = FS.save(f'{name}.{extension}', decoded_file)

        filenames.append(FS.url(archive))

    return filenames