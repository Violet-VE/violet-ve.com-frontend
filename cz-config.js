/*
 * @Author: 小纯洁
 * @Description:
 * @Date: 2022-03-21 20:24:43
 * @LastEditTime: 2022-03-21 20:24:43
 * @FilePath: \Violet-VE.com\violet-ve.com\cz-config.js
 */
module.exports = {
	// 可选类型
	types: [
		{ value: "新增功能", name: "新增功能" },
		{ value: "问题修复", name: "问题修复" },
		{ value: "文档变更", name: "文档变更" },
		{
			value: "代码格式",
			name: "代码格式或注释的变动(不影响代码运行的变动)",
		},
		{
			value: "代码重构",
			name: "代码重构(一般会增加BUG~)",
		},
		{ value: "性能优化", name: "性能优化" },
		{ value: "测试变更", name: "增加或删除测试" },
		{ value: "工具变更", name: "构建过程或辅助工具的变动" },
		{ value: "代码回退", name: "回退" },
		{ value: "代码打包", name: "打包" },
	],
	// 消息步骤
	messages: {
		type: "请选择提交类型:",
		customScope: "请输入修改范围(/为项目根目录):",
		subject: "请简要描述提交(必填):",
		body: "请输入详细描述(可选):",
		footer: "请输入要关闭的issue(可选):",
		confirmCommit: "确认使用以上信息提交？(y/n/e/h)",
	},
	// subject文字长度默认是72
	subjectLimit: 72,
};
