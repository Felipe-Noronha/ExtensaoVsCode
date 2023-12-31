import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('hello-world.helloWorld', () => {
        vscode.window.showInformationMessage('Hello, World!');
    });

    context.subscriptions.push(disposable);
}
