import fs from 'fs';
import path from 'path';

function listarDiretorio(dir, prefixo = '') {
    const arquivos = fs.readdirSync(dir);
    arquivos.forEach((arquivo, index) => {
        const caminho = path.join(dir, arquivo);
        const stats = fs.statSync(caminho);
        const isUltimo = index === arquivos.length - 1;
        const marcador = isUltimo ? '└── ' : '├── ';

        console.log(prefixo + marcador + arquivo + (stats.isDirectory() ? '/' : ''));

        if (stats.isDirectory() && !arquivo.startsWith('node_modules') && !arquivo.startsWith('.git')) {
            const novoPrefixo = prefixo + (isUltimo ? '    ' : '│   ');
            listarDiretorio(caminho, novoPrefixo);
        }
    });
}

console.log('Estrutura do projeto (ignorando node_modules e .git):\n');
listarDiretorio('.');