# Github에 Commit을 남겼는데 Contribution 그래프가 채워지지 않는 이유와 해결 방법

## 이유
Github 문서 
https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile

## 해결방법
### 로컬 Git 커밋 이메일이 계정에 연결되지 않은 경우

<b>문제</b>Github 리포지토리에서 확인 했을 때, 내 계정이 아닌 Contributor 계정으로 뜸 

 1. 터미널에서 해당 리포지토리로 이동 
 2. git config --global user.email -> 확인 해보니 다른 이메일 계정이 등록되어 있음.
 3. git config user.email로 --global을 빼고 작성해서 해당 리포지토리에서만 설정 이메일 변경
 4. <img width="317" alt="스크린샷 2023-05-11 23 35 51" src="https://github.com/lightup-jin/SW-Professional-Developer-Course/assets/82255996/dc1e7d2f-bfd5-4fd6-baeb-1e95dd1eb7e0"> 해결!
