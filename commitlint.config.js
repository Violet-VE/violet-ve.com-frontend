/*
 * @Author: 小纯洁
 * @Description:
 * @Date: 2022-03-21 20:24:26
 * @LastEditTime: 2022-03-21 20:24:26
 * @FilePath: \Violet-VE.com\violet-ve.com\commitlint.config.js
 */
module.exports = {
	// 继承的规则
	extends: ["@commitlint/config-conventional"],
	parserPreset: {
		headerPattern: /^([0-9a-zA-Z_\u4e00-\u9fa5]*)(?:((.*)))?!?: (.*)$/,
	},
	// 定义规则类型
	rules: {
		// type 类型定义，表示 git 提交的 type 必须在以下类型范围内
		"type-enum": [
			2,
			"always",
			[
				"新增功能", // 新功能 feature
				"问题修复", // 修复 bug
				"文档变更", // 文档注释
				"代码格式", // 代码格式(不影响代码运行的变动)
				"代码重构", // 重构(既不增加新功能，也不是修复bug)
				"性能优化", // 性能优化
				"测试变更", // 增加测试
				"工具变更", // 构建过程或辅助工具的变动
				"代码回退", // 回退
				"代码打包", // 打包
			],
		],
		// subject 大小写不做校验
		"subject-case": [0],
		"type-case": [0],
	},
};
