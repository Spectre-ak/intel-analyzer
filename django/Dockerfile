FROM python:3.6.1-alpine

WORKDIR /helloworld

ADD . /helloworld

RUN pip install -r requirements.txt

EXPOSE 8000

CMD python manage.py runserver 0:8000