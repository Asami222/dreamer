<div id="top"></div>

# Dreamer
### ストーリー
<!-- プロジェクトについて -->
Todoアプリにご褒美機能を追加したものを制作しました。Todoを作成すると同時に達成したらもらえる星の数を設定します。別ページで星の数つきのご褒美を設定します。そしてTodoを達成して貯めた星をご褒美と交換できます。Todoは年、月、日、週、時間単位ごとに細かく設定できます。コピーもできるので、新たに作り直さなくても既に作成済みのTodoを利用できます。


## URL
https://dreamer-six.vercel.app
 <br >
テストユーザーでログインから、ユーザー名とパスワードを入力せずにログインできます。

## 使用技術一覧

<!-- シールド一覧 -->
<!-- 該当するプロジェクトの中から任意のものを選ぶ-->
<p style="display: inline">
  <!-- フロントエンドの言語一覧 -->
  <img src="https://img.shields.io/badge/-typescript-000000?style=for-the-badge&logo=typescript&logoColor=FFE500">
  <!-- フロントエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-react-000000?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-storybook-000000?style=for-the-badge&logo=storybook&logoColor=FF4785">
  <img src="https://img.shields.io/badge/-styledcomponents-000000?style=for-the-badge&logo=styledcomponents&logoColor=DB7093">
  <img src="https://img.shields.io/badge/-headlessui-000000?style=for-the-badge&logo=headlessui&logoColor=66E3FF">
  <img src="https://img.shields.io/badge/-mui-000000?style=for-the-badge&logo=mui&logoColor=007FFF">
  <img src="https://img.shields.io/badge/-jest-000000?style=for-the-badge&logo=jest&logoColor=C21325">
  <!-- バックエンドの言語一覧 -->
  <!-- ミドルウェア一覧 -->
  <!-- インフラ一覧 -->
</p>

## 機能一覧
- ユーザー認証、データ管理(json-server with express)
- ユーザー、todo、星の数、ご褒美などのグローバルな状態管理(useContex、useReducer)
- データ取得、更新(useSWR、fetcher)
- コンポーネント動作確認(Storybook)

<!-- 
- ユーザー登録、ログイン機能(devise)
- 投稿機能
  - 画像投稿(refile)
  - 位置情報検索機能(geocoder)
- いいね機能(Ajax)
  - ランキング機能
- コメント機能(Ajax)
- フォロー機能(Ajax)
- ページネーション機能(kaminari)
  - 無限スクロール(Ajax)
- 検索機能(ransack)
-->
## テスト
- E2Eテスト(Playwight)
  - 認証機能
  - フォーム

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Node.js               | 22.2.0    |
| React                 | ^19.0.0     |
| Next.js               | 15.1.6     |

その他のパッケージのバージョンは package.json を参照してください. 


## プロジェクト詳細

<h3 align="center">ご飯の予約</h3>
<p align="center">
  <img src="https://raw.githubusercontent.com/Asami222/egg-or-chicken/main/public/git/food-area.webp" width="500" style="max-width: 100%;" />
</p>
<h3 align="center">天気情報取得</h3>
<p align="center">
  <img src="https://raw.githubusercontent.com/Asami222/egg-or-chicken/main/public/git/weather-area.webp" width="500" style="max-width: 100%;" />
</p>
<h3 align="center">毎日訪れてアイテムを獲得</h3>
<p align="center">
  <img src="https://raw.githubusercontent.com/Asami222/egg-or-chicken/main/public/git/home-area.webp" width="500" style="max-width: 100%;" />
</p>
<h3 align="center">使い方ページ</h3>
<p align="center">
  <img src="https://raw.githubusercontent.com/Asami222/egg-or-chicken/main/public/git/howto-area.webp" width="500" style="max-width: 100%;" />
</p>

<p align="right">(<a href="#top">トップへ</a>)</p>
