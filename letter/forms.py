from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        #fields = ['author', 'photo', 'source', 'body']
        fields = ['author', 'photo', 'body']