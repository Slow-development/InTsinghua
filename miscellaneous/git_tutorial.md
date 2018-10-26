## 开发指南

master 分支发布稳定的可运行版本，dev 分支是开发中的主分支，新模块的分支向 dev 发起 merge request ，测试完毕后，由 dev 向 master 发起 merge request 发布稳定版本。

为了方便代码管理，我们禁止直接 push 到 master 和 dev 分支上去，采用 rebase + merge request 的方式更新代码。大致操作如下

初始化分支
```bash
$ git clone git@github.com:Slow-development/InTsinghua.git 
$ git checkout -b branch_name #这里创建自己的分支并 checkout 进去
```

每次写代码之前，先更新一下，与远端保持同步
```bash
$ git checkout dev
$ git pull # 更新 dev 分支
$ git checkout branch_name
$ git rebase dev # 将 dev 分支的变化更新到自己的分支上
```

完成代码编写，准备更新时
```bash
$ git status # git add 前最好检查一下
$ git add .
$ git commit -m "Your comment"
$ git checkout dev
$ git pull # 更新 dev 分支
$ git checkout branch_name
$ git rebase dev
$ git push origin branch_name
```

注意，上面的 branch\_name 都换成自己的分支名字

然后进入github网页，提交一个 merge request ， dev 分支的拥有者 review 通过之后就会合并。

## 注意事项

- 分支名：name/module 其中，name 是自己中文名字的缩写，如 jzy ；module 是自己负责的模块名字，如 cloud\_development
- commit 注释规范：解释清楚自己做的更改，自己负责的模块
