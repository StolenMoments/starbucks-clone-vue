# Vue.js Starter Repository @ Externship 프로그램

본 저장소는 Project Lion에서 진행되는 Externship 프로그램 중 Vue.js로 진행되는 프론트엔드 트랙을 위한 Starter Repository입니다. 수강생분들은 Externship 프로그램을 시작하면서 본 Repository를 기반으로 각 주차별 미션을 진행하시게 됩니다.

## 패키지 버전

본 리포는 `vue-cli` 5.0.0-rc2를 사용해 구성되었으며, 기본 Vue.js(v3.2.13)와 ESLint, 그리고 `@vue/test-utils`가 포함되어 있습니다.

* 추가로 필요하신 Vue 플러그인은 `vue-cli`를 사용하여 추가하셔야 합니다. (참고:  [Installing Plugins in an Existing Project](https://cli.vuejs.org/guide/plugins-and-presets.html#installing-plugins-in-an-existing-project))

## 미션 수행 방법

5주동안 익스턴십을 진행하면서 수강생분들은 스마트 오더 애플리케이션을 구현해나가게 됩니다. 즉, 이전 주차에서 구현한 내용을 계속 이어가면서 결과물을 구현하시게 됩니다.

* Default 브랜치인 `main` 브랜치에는 이전 주차까지 구현한 결과물을 유지합니다.
* 주차별 미션을 수행할 때는 `main` 브랜치에서 `develop` 브랜치(혹은 다른 이름의 개발용 브랜치)를 새로 만들어 미션을 수행합니다.
* 미션 코드 제출은 `develop` 브랜치에서 `main` 브랜치로 향하는 Pull Request를 만들어 진행합니다. (자세한 점은 하단 참조)
  * 해당 주차가 모두 종료되면 Pull Request를 `main` 브랜치로 Merge하고, `main` 브랜치에서 다시 개발 브랜치를 만들어 새로운 주차를 진행하세요. (**브랜치를 새로 만들 때는 꼭 최신 커밋까지 모두 가져와 브랜치를 만들어 주세요.**)

## 미션 제출 방법

* '미션 수행 방법'에서 설명드린 것처럼 개발 브랜치(예. `develop`)에서 해당 주차의 미션 요구사항을 구현하세요.
* 구현 완료 후 제출을 위해 Pull Reuqest를 생성해수제쇼. 
  * Pull Request 생성시`develop` 브랜치에서 `main` 브랜치로 머지가 되도록 해주세요.
  * 즉,   **base: main**, **compare: develop**로 설정하시면 됩니다.

* 제출하실 때 Submission Checker Action이 통과되도록 해주세요.
  * 제출하신 코드가 Linter가 적용되어 있는지, 그리고 테스트 코드들 중 실패하는 코드가 없는지 확인하는 Action입니다.
  * 이들은 사전에 제공된 클린코드 가이드를 잘 따라주고 계신지를 확인하기 위한 용도로, 제출하신 PR에서 Action이 Fail인 상태일 경우 페널티가 부여될 수 있습니다.

* 마지막으로 Code Presentation 영상을 촬영하고, 디스코드에서 공지된 에어테이블 양식을 작성해 최종 제출합니다
  * 에어테이블 양식을 작성하여 제출해주셔야 평가를 받으실 수 있습니다!

