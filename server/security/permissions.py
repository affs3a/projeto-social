from rest_framework.permissions import BasePermission, IsAuthenticatedOrReadOnly, SAFE_METHODS

class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        print(bool(
            request.user.is_authenticated and
            request.user.role == 2 or
            request.method in SAFE_METHODS
        ))
        return bool(
            request.user.is_authenticated and
            request.user.role == 2
        )
    
class IsProvider(BasePermission):
    def has_permission(self, request, view):
        return bool(
            request.user.is_authenticated and
            request.user.role in (1, 2)
        )
    
class PublicView(BasePermission):
    def has_permission(self, request, view):
        return bool(
            request.method in SAFE_METHODS
        )

