## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### git commit
- "feat": feature 新功能
- "fix": bug 修复
- "docs": 文档
- "style": 格式(不影响代码运行的变动)
- "refactor": 重构(即不是新增功能，也不是修改bug的代码改动)
- "perf": 优化(性能提升，体验改善)
- "test": 增加测试
- "build": 编译相关 
- "ci": 部署
- "chore": 构建过程或辅助工具的变动
- "revert": 回滚到上一个版本

### 压缩node_modules
```sh
tar -jcvf node_modules.tar.bz2 ./node_modules
```

### 生产部署检查列表
1. vite.config.ts
- console配置

2. env
- 接口调用地址

3. html
- console调试工具

4. 支付id
测试环境，4个支付ID：
- 7天勾连续包月 115
- 7天会员 115
- 首月1元连续包月 116
- 9.6元连续包月 117
