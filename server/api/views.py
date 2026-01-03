from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import JobApplicationSerializer
from .models import JobApplication

@api_view(["GET"])
def health(request):
    return Response({"ok": True})

@api_view(["GET", "POST"])
def applications(request):
    if request.method == "GET": #read job applications
        applications = JobApplication.objects.all()
        serializer = JobApplicationSerializer(applications, many=True)
        return Response(serializer.data)
    if request.method == "POST": #create a new job application
        serializer = JobApplicationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
        
        
