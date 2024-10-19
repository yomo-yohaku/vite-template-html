# サンプルページ

[https://](https://)

# 開発環境

- Visual Studio Code (VSCode)
- Node.js v20.18.0
- vite v5.4.8

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

# VoltaからNode.jsをインストール

Node.jsのバージョンを変更する度に、Node.jsをアンインストールしてから特定のバージョンを再インストールするのは大変なので、Volta等のバージョン管理ツールを使用すると便利です。

※ Node.js公式から直接インストールする場合や他の管理ツールを使う場合は飛ばしてください

## Node.jsが入っていないかを確認

以下のコマンドでバージョンが出てこなければインストールされていません。

```bash
node -v
```

```bash
npm -v
```

## Node.jsがインストールされている場合はアンインストール

Node.js公式や他のNode.jsのバージョン管理ツールでインストールされている場合は、それぞれの方法でアンインストールします。方法が多いので説明は割愛します。

## Voltaをインストールする

### Mac

Macのデフォルト`shell`は`zsh`ですが、`bash`,`zsh`,`fish`は全て以下のコマンドでインストールできます。

```bash
curl https://get.volta.sh | bash
```

### Windows

Windowsの場合は、以下の公式ページの**Windows Installation**の指示に従ってインストールを行なってください。

[Getting Started | Volta](https://docs.volta.sh/guide/getting-started)

## Voltaがインストールされているか確認

以下のコマンドでダウンロードしたバージョンが返ってきたら、成功です。

※ 実行されない場合はVScodeを再起動

```bash
volta -v
```

## Node.jsをインストール

### 最新のLTS（安定版）をインストール（推奨）

以下のコマンドを実行します。

```bash
volta install node
```

## Node.jsがインストールされているか確認

以下のコマンドを実行します。

```bash
volta list all
```

下記が返ってきたら、成功です。

```bash
⚡️ User toolchain:

    Node runtimes:
        v20.18.0 (default)

    Package managers:


    Packages:
```

# ローカル環境にクローンする準備

VScodeのエクスプローラーから構築したいディレクトリを開きます。

例：C:\Users\＜ユーザー名＞\Documents\\project

VScodeのターミナルで構築したいディレクトリに移動します。「cd 」までタイプし、エクスプローラー（Finder）からターミナルに目的のディレクトリをドラッグ&ドロップします。コピペでもOK。

```bash
cd ここに該当のディレクトリをドラッグ＆ドロップ

# 例
cd 'c:/Users/＜ユーザー名＞/Documents/project'
```

## ターミナルで開く場所を「VSCodeで開いてるディレクトリ」に設定

設定しておくと毎回`cd`で移動しなくていいので便利です。

1. VScode左下の歯車マーク「管理」から「設定」をクリック。

2. 設定タブが開き、右上のアイコン「設定（JSON）を開く」をクリックして`settings.json`に下記を追記。

```json
{
  "terminal.integrated.cwd": "${workspaceFolder}"
}
```

# ローカル環境にクローンする方法

### クローンしたいリポジトリのGithubからURLを取得する

Githubのリポジトリのトップページ > codeのボタン > HTTPS用のクローンURLをコピーします。

### クローンを実施する

コピーしたURLを用いて、以下コマンドを実行します。フォルダの名前を変更したい場合は、コマンドの末尾に設定したいフォルダ名を追加します。

```bash
git clone コピーしたGithubのURL

# 例：クローンしたフォルダをtest_projectという名前に変更したい場合
git clone コピーしたGithubのURL test_project

# 例：クローンしたフォルダをtest_project/2024/に保存したい場合
git clone コピーしたGithubのURL test_project/2024
```

### VScodeのエクスプローラーを開き直す

クローンしたフォルダをVScodeで開き直します。ターミナルのディレクトリもクローンしたディレクトリが指定されているのを確認しましょう。されていない場合は`cd`コマンドで移動します。

### ローカルブランチの確認

`git branch`コマンドを実行すると、ローカルブランチの一覧が確認できます。（クローン後はデフォルトのブランチのみ反映されます）

### リモートブランチをローカルブランチに反映

1. `git fetch`で最新のリモートブランチを取得。

```bash
git fetch
```

2. `git branch -r`でリモートブランチ（リモート追跡ブランチ）を確認。

```bash
git branch -r

# 例：コマンド実行後、下記が表示されます
origin/HEAD -> origin/development
origin/development
origin/issue265_esportsCourse
origin/issue293_whitehacker
origin/production
```

1. `git switch`で対象のブランチに切り替えつつ、リモートブランチをローカルに持ってくる。

```bash
git switch ＜対象のリモートブランチ＞

#例：productionブランチをローカルに持っていきたい場合
git switch production
```

4. `git branch`でローカルブランチに反映されているのを確認。

```bash
git branch

# 例：コマンド実行後、下記が表示されます（*が付いているのは現在のブランチ）
git branch
  development
* production
```

## 自身のリポジトリと紐付けをしたい場合

クローンしたファイルはクローン元のリポジトリと紐づいている状態なので、自身のリポジトリと紐付けをしたい場合は以下のコマンドで.gitディレクトリを削除します。

```bash
rm -rf .git
```

# ローカルで開発を開始する

### Viteをインストール

以下のコマンドを実行してViteをインストールします。

```bash
npm install vite
```

### 開発サーバを起動する

以下のコマンドを実行すると開発サーバが起動します。

```bash
npm run dev
```

### ファイルのビルド

1. ターミナルの右上の＋マークから「新しいターミナル」を追加します。
2. 以下のコマンドでファイルがビルドされます。（distフォルダに格納）

```bash
npm run build
```

# 【2回目以降】ローカルで開発を開始する

### 開発サーバを起動する

以下のコマンドを実行すると開発サーバが起動します。表示されたリンクを`Ctrl + クリック`でページにアクセスできます。

```bash
npm run dev
```

### プッシュ前にファイルのビルド

1. ターミナルの右上の＋マークから「新しいターミナル」を追加します。
2. 以下コマンドを実行してプッシュ前にビルドをしましょう。変更されないと思ったらビルドを忘れてたりします。

```bash
npm run build
```

### 個別にSass（SCSS）ファイルをコンパイルしたい場合

ビルド時に自動でSCSSファイルが`app-xxx.css`に変換されるようになっていますが、個別にCSSファイルを読み込みたい場合は以下を実行して個別にCSSファイルを書き出してください。

1. ターミナルの右上の＋マークから「新しいターミナル」を追加します。
2. 以下のコマンドを実行するとSassが起動して、ファイル保存時に自動でコンパイルされます。

`src/assets/scss/previous/`ディレクトリにあるscssが`public/assets/css/`ディレクトリにcssで書き出されます。

※ Sassを終了するには、`npm run Sass`を実行したターミナルで`Ctrl + c`を押します。

```bash
npm run sass
```

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
