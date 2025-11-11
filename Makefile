.PHONY: help dev build start serve clean install format format-check lint lint-check lint-all type-check analyze

# デフォルトターゲット
help:
	@echo "利用可能なコマンド:"
	@echo "  make dev           - 開発サーバーを起動"
	@echo "  make build         - プロダクションビルドを実行"
	@echo "  make start         - 開発サーバーを起動（devのエイリアス）"
	@echo "  make serve         - プロダクションサーバーを起動"
	@echo "  make install       - 依存関係をインストール"
	@echo "  make format        - コードをフォーマット"
	@echo "  make format-check  - フォーマットをチェック（変更なし）"
	@echo "  make lint          - Lintを実行して自動修正"
	@echo "  make lint-check    - Lintをチェック（修正なし）"
	@echo "  make lint-all      - Lint + 型チェックを実行"
	@echo "  make type-check    - TypeScriptの型チェックを実行"
	@echo "  make analyze       - バンドルサイズを分析"
	@echo "  make clean         - ビルド成果物を削除"

# 開発サーバーを起動
dev:
	yarn dev

# プロダクションビルド
build:
	yarn build

# 開発サーバーを起動（devのエイリアス）
start:
	yarn start

# プロダクションサーバーを起動
serve:
	yarn serve

# 依存関係をインストール
install:
	yarn install

# コードをフォーマット
format:
	yarn format

# フォーマットをチェック（変更なし）
format-check:
	yarn format:check

# Lintを実行して自動修正
lint:
	yarn lint

# Lintをチェック（修正なし）
lint-check:
	yarn lint:check

# Lint + 型チェック
lint-all:
	yarn lint:all

# TypeScriptの型チェック
type-check:
	yarn type-check

# バンドルサイズを分析
analyze:
	yarn analyze

# ビルド成果物を削除
clean:
	rm -rf .next
	rm -rf .contentlayer
	rm -rf node_modules/.cache
