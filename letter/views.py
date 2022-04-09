from django.shortcuts import redirect, render, get_object_or_404
from .models import Post
from .forms import PostForm     # forms.py에서 PostForm 가져오기


# Create your views here.
def home(requests):
    return render(requests, 'home.html')

def afterhome(requests):
    return render(requests, 'after_home.html')

def icon(requests):
    return render(requests, 'letter_icon.html')

def writing(requests):
    posts = Post.objects # Post.objects를 posts 변수에 담기

    # POST vs GET 분기
    if requests.method == 'POST':
        form = PostForm(requests.POST, requests.FILES)   # form 변수에 PostForm 할당
        if form.is_valid():     # form 유효성 검증
            form.save()         # 내용 저장
            return redirect('home') # home 페이지로 가기
    else:
        form = PostForm()   # 빈 form 열기
        
    return render(requests, 'letter_writing.html', {'posts':posts, 'form':form}) # 인자 3개 : request, template, context

def afterletter(requests, pk):  # request와 pk도 인자로 받음
    post = get_object_or_404(Post, pk=pk)       # 해당 객체가 있으면 가져오고 없으면 404에러, pk로 pk 사용
    return render(requests, 'after_letter.html', {'post':post})

