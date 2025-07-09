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
- ユニットテスト(Jest)
  - ログイン、サインイン
  - フォーム
  - ヘッダー
  - 他
  

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Node.js               | 22.2.0    |
| React                 | ^19.0.0     |
| Next.js               | 15.1.6     |

その他のパッケージのバージョンは package.json を参照してください. 


## プロジェクト詳細

<h3 align="center">ログイン状態による画像表示の切り替え</h3>
<p>
useContextフックを使用し、グローバルにユーザーのログイン状態を管理しています。未ログイン、ユーザーイメージを登録済の場合のログイン、イメージを登録していない場合のログイン状態で表示画像を切り替え分かりやすいUIにしています。
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/Asami222/dreamer/main/public/git/auth-user.webp" width="500" style="max-width: 100%;" />
</p>
<h3 align="center">新規登録の場合のみ表示</h3>
<p>
新規登録でユーザー情報を登録した場合は、新規登録の時にだけ表示するページに移行するようになっています。
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/Asami222/dreamer/main/public/git/signin.webp" width="328" style="max-width: 100%;" />
</p>
<h3 align="center">ユーザーフォームとご褒美設定フォーム</h3>
<p>
ユーザー情報は後から、ポップアップのメニューより内容を編集することができます。ユーザー設定、ご褒美設定はどちらもreact-hook-formを使用してバリデーションチェックをしています。
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/Asami222/dreamer/main/public/git/form.webp" width="500" style="max-width: 100%;" />
</p>
<h3 align="center">Todoページ</h3>
<p>
TodoはuseContextでグローバルに状態管理し、useReducerで作成、削除などの更新関数を作成し、フォームやTodoページのコピー、完了ボタンで使用しています。フォームではreact-hook-formを利用しバリデーションチェックを行なっています。
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/Asami222/dreamer/main/public/git/todo.webp" width="500" style="max-width: 100%;" />
</p>
<h3 align="center">ユーザーページ</h3>
<p>
ユーザーページでは手持ちの星の数や夢などのユーザー情報と、設定済のご褒美一覧を見ることができます。手持ちの星の数よりご褒美の星の数の方が大きい場合は、ボタンをクリックできないようになっています。ご褒美獲得記録ページでは、今までに星と交換したご褒美を獲得日付つきで見ることができ、ご褒美の表示がなくなってもこのページを見ればわかるようになっています。また、星の履歴も残すことによって新たに作成するご褒美の参考にすることができます。
</p>
<p align="center">
  <img src="https://raw.githubusercontent.com/Asami222/dreamer/main/public/git/reward.webp" width="328" style="max-width: 100%;" />
</p>

<p align="right">(<a href="#top">トップへ</a>)</p>
