import * as vscode from 'vscode';
import { toUpperCase } from './utils';

// 获取package.json中的版本号
const version = require('../package.json').version;

export function activate(context: vscode.ExtensionContext) {
    // 注册视图
    vscode.window.registerTreeDataProvider('freewindDemo', {
        getTreeItem: (): vscode.TreeItem => {
            return new vscode.TreeItem('');
        },
        getChildren: (): vscode.TreeItem[] => []
    });

    // 注册命令
    const disposable = vscode.commands.registerCommand('freewindDemo.hello', async () => {
        await vscode.window.showInformationMessage(toUpperCase(`Hello Freewind! - (${version})`), {
            modal: true
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { } 