# サンプルページ

https://yomo-yohaku.github.io/vite-template-html/

# VSCode拡張機能

`.vscode/extensions.json` に推奨拡張機能を記載しています。

### EditorConfig

インデントや文字コード、改行コードなどのコーディングスタイルに関するエディタの設定を、異なるエディタ間で共有するための規格です。

### Prettier

ファイル保存時にコードをフォーマットします。

### Stylelint

ファイル保存時にコードがチェックされ、スタイルの並び替えを行います。

### Path Autocomplete

ファイルパスを入力する際にディレクトリ名やファイル名を補完します。

# ローカルで開発を開始する

### 前提条件
- Node.jsがインストールされていること

### Viteをインストール

ローカル環境にクローン後、以下のコマンドを実行してViteをインストールします。（初回のみ）

```bash
npm install vite
```

### 開発サーバを起動する

以下のコマンドを実行すると開発サーバが起動します。

```bash
npm run dev
```

### ファイルのビルド

以下のコマンドでファイルがビルドされます。（distフォルダに格納）

```bash
npm run build
```

## 個別にSass（SCSS）ファイルをコンパイルしたい場合

ビルド時に自動でSCSSファイルが`app-xxx.css`に変換されるようになっていますが、個別にCSSファイルを読み込みたい場合は以下コマンドを実行して個別にCSSファイルを書き出してください。
   
```bash
npm run sass
```

Sassが起動して、ファイル保存時に`src/assets/scss/previous/`ディレクトリにあるscssが`public/assets/css/`ディレクトリにcssで書き出されます。

※ Sassを終了するには、`npm run Sass`を実行したターミナルで`Ctrl + c`を押します。

# コミットテンプレートの使い方

gitコマンドでテンプレートに設定します。（初回のみ）

```bash
git config --local commit.template .commit_template
```
必要な変更をステージし、下記コマンドでコミットテンプレートが開きます。

```bash
git commit
```

#（ハッシュ）でコメントアウトされているFormatを参考にコミットメッセージを書き、保存してファイルを閉じるとコミットされます。


# 使用技術

- [Vite](https://ja.vite.dev/)
- [Sass](https://sass-lang.com/) (SCSS)
- [Tailwindcss](https://tailwindcss.com/)
- [GSAP](https://gsap.com/)
- [Storybook](https://storybook.js.org/)

# ディレクトリ構成

### 全体

```sh
/
├── .github/
│   └── workflows/ # デプロイするためのファイル
│       ├── deploy.yml
│       └── remove-old-artifacts.yml
├── .storybook/ # Storybookの設定ファイル
│   ├── main.js
│   └── preview.js
├── .vscode/
│   ├── extensions.json # VSCodeの推奨拡張機能を記述
│   └── settings.json # VSCodeワークスペース設定
├── dist/ # ビルドしたファイルが出力されるディレクトリ
├── node_modules/ # 編集不要：自動生成されるコアファイル格納場所
├── public/ # Viteの変換対象外のディレクトリ（中身は後述）
├── src/ # 開発ディレクトリ（中身は後述）
├── .browserslistrc # 対象ブラウザを指定する設定ファイル
├── .commit_template # コミットテンプレート
├── .editorconfig # コードのフォーマットを一貫させるための設定ファイル
├── .gitignore # ファイル・フォルダをGitの追跡対象から除外する
├── .prettierrc.cjs # Prettierの設定
├── .stylelintignore # Stylelintrのチェック対象から除外する
├── .stylelintrc.cjs # Stylelintrの設定
├── jsconfig.json # javascriptをVSCodeの自動補完に対応
├── package-lock.json # 編集不要：インストールしたパッケージ情報などが記載されている
├── package.json # プロジェクトのjsonファイル
├── postcss.config.cjs # postcssの設定ファイル
├── README.md # プロジェクトの説明、ツールの使い方、インストール方法など
├── rollup.js # JSのモジュールバンドラー
├── tailwind.config.js # Tailwindの設定ファイル
└── vite.config.js # viteの設定ファイル
```

### src配下（開発ディレクトリ）

```sh
src/
├── assets/
│   ├── js/　# 中身は後述
│   └── scss/　# 中身は後述
├── configs/
│   ├── global.json # サイト全体の設定ファイル
│   └── meta.json # ページ単位のmetaを指定
├── includes/ # 共通パーツ（中身は後述）
├── pages/ # ここに追加したHTMLファイルがページ扱いとなる（中身は後述）
└── stories/
    ├── button.stories.js # Storybookに表示させるコンポーネントの設定ファイル
    ├── GettingStarted.mdx # はじめにドキュメント
    ├── stories.scss # Storybookを見やすくする用のSCSS
    └── ...
```

### public配下

`npm run build`時に変換対象にしたくないファイル（そのまま使いたいファイル）。

```bash
public/
└── assets/
    ├── css/ # src/assets/scss/previous/scss/でコンパイルしたファイルが書き出される
    │   └── top/
    │       ├── top.css
    │       └── top.css.map
    └── images/ # 画像
        ├── common/ # 共通パーツで使う画像
        │   ├── banner_sale_pc.png
        │   ├── banner_sale_pc@2x.png
        │   ├── banner_sale_sp.png
        │   ├── banner_sale_sp@2x.png
        │   └── logo.svg
        ├── features/ # 特定の機能でのみ必要となる要素で使う画像
        │   ├── icon_choose.svg
        │   ├── image_course-fluffy.png
        │   ├── image_course-fluffy@2x.png
        │   └── ...
        └── pages/ # ページ単位で使う画像
            └── top/
                └── hero_illust.svg
```

### JavaScript

```bash
src/assets/js/
├── libs/
│   └── breakpoints.js # PCとスマホで処理を分岐させるためのファイル
├── index.js # 様々なJSファイルをまとめるファイル
├── scroll-fade.js
└── ...
```

### SCSS

```bash
src/assets/scss/
├── base/ # リセットCSSとサイト内共通で効かせたいスタイル 
│   ├── _index.scss
│   └── base.scss
├── components/ # コンポーネント（サイト内で使い回すパーツのスタイル）
│   ├── _index.scss
│   ├── c-button.scss
│   ├── c-heading-primary.scss
│   ├── c-heading-secondary.scss
│   └── ...
├── features/ # 特定の機能でのみ必要となる要素
│   ├── _index.scss
│   ├── course.scss
│   ├── feature.scss
│   ├── question.scss
│   └── ...
├── globals/ # mixinなど共通で使用するもの
│   ├── _index.scss
│   └── globals.scss
├── layouts # レイアウト部分の管理
│   ├── _index.scss
│   ├── footer.scss
│   ├── header.scss
│   ├── l-container.scss
│   └── ...
├── libs/
│   └── destyle.css # リセットCSS
├── pages/ # 各ページのモジュール管理
│   ├── cart
│   │   ├── _index.scss
│   │   ├── cart.scss
│   │   └──  ...
│   ├── top/
│   │   ├── _index.scss
│   │   ├── top-hero.scss
│   │   └──  ...
│   └── _index.scss
├── previous/ # このディレクトリはpublic/assets/css/にcssを書き出す
│   └── top
│       ├── _top_common.scss
│       ├── _top_pc.scss
│       ├── _top_sp.scss
│       └── top.scss
└── utils/ # ユーティリティクラス
    ├── _index.scss
    ├── tailwind.scss
    └── utils.scss
```

### includes

この中に格納したHTMLファイルは`{{>ファイル名}}`で呼び出せます。

```bash
src/includes/ # 共通パーツ
├── components/ # コンポーネント
│   └── banner.html
├── globals/ # headやheaderなど
│   ├── footer.html
│   ├── head.html
│   ├── header.html
│   ├── scripts.html # 共通で使うスクリプト
│   └── webfonts.html # 共通で使うフォント
└── modules # SVGスプライト
    ├── logo.html
    ├── wave-bottom.html
    └── wave-top.html
```

### pages

ここに追加したHTMLファイルがページ扱いとなります。（componentsディレクトリは除く）

```bash
src/pages/
├── components # Storybookで表示させるコンポーネントのhtml
│   ├── c-button.html
│   ├── c-heading-primary.html
│   ├── c-heading-secondary.html
│   └── ...
├── app.js # 様々なJSファイルをまとめた /src/assets/js/index.js を読み込んでいる
├── app.scss # 様々な SCSS ファイルを読み込んでいる
├── cart.html
└── index.html # トップページ
```

# npm scripts(npm run …)

| scripts | 説明 |
| --- | --- |
| prebuild | ビルド前に実行。dist ディレクトリを削除。 |
| dev | 開発サーバーを起動。 |
| build | ビルドを実行。dist ディレクトリを生成し、生成した HTML を prettier で整形。 |
| production | ビルドを実行し、HTML を minify。 |
| preview | ビルド結果をプレビュー。 |
| format-html | dist ディレクトリの HTML ファイルを prettier で整形。 |
| sass | scssを保存すると自動でコンパイルされる。 |
| storybook | storybookを起動。 |
| build-storybook | storybook-static ディレクトリに Storybook が静的サイトとして出力。 |
