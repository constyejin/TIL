# Github에 Commit을 남겼는데 Contribution 그래프가 채워지지 않는 이유와 해결 방법

## 이유
<p>Github 공식문서</p> 
https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile

## 해결방법
### 로컬 Git 커밋 이메일이 계정에 연결되지 않은 경우

<b>문제</b>
<p>Github 리포지토리에서 확인 했을 때, 내 계정이 아닌 다른 계정으로 뜸 & Contribution 그래프가 채워지지 않음.</p>

 1. 터미널에서 해당 리포지토리로 이동 
 2. git config --global user.email -> 확인 해보니 다른 이메일 계정이 등록되어 있음.
 3. git config user.email로 --global을 빼고 작성해서 해당 리포지토리에서만 설정 이메일 변경
 4. 해결!
 <img width="317" alt="스크린샷 2023-05-11 23 35 51" src="https://github.com/lightup-jin/SW-Professional-Developer-Course/assets/82255996/dc1e7d2f-bfd5-4fd6-baeb-1e95dd1eb7e0"> 

<ol>계정을 두 개 사용하고 싶어서 
  <li>git config --global --unset user.email "이메일"로 global 선언해둔 email 삭제</li>
  <li>--global 빼고 git config user.email "이메일"로 해당 리포지토리에만 등록</li>
</ol>

🤯 새로운 문제 등장..
이번에는 리포지토리 들어가면 옆에 이름은 잘 뜨는데 계정 연동이 안 되어 있다.. 일단 자고 내일 해야지
