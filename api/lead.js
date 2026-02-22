import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Configurar CORS para permitir requisições do seu domínio
    res.setHeader('Access-Control-Allow-Origin', '*'); // Em produção, troque * pelo seu domínio
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email é obrigatório' });
    }

    try {
        await resend.emails.send({
            from: 'SekkoLab <contato@seudominio.com>', // Substitua por um e-mail verificado no Resend
            to: email,
            subject: 'Seu Pack de 100 Prompts IA chegou!',
            html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: sans-serif; background: #0f172a; color: #e2e8f0; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background: #1e293b; border-radius: 16px; padding: 32px; border: 1px solid #334155;">
              <h1 style="color: #fff; font-size: 24px; margin-bottom: 16px;">Olá!</h1>
              <p style="color: #94a3b8; line-height: 1.6;">Conforme prometido, aqui está o seu link para baixar o <strong style="color: #fff;">Pack 100 Prompts IA</strong>:</p>
              <a href="https://sekkolab.vercel.app/downloads/100-prompts-ia.txt" style="display: inline-block; background: #06b6d4; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; margin: 24px 0;">Baixar Agora</a>
              <p style="color: #94a3b8; line-height: 1.6;">Esse pack é apenas o começo. Na <strong style="color: #fff;">Trilha IA: Do Zero ao Topo</strong> você aprende a aplicar IA em marketing, vendas e carreira com muito mais profundidade.</p>
              <a href="https://sekkolab.vercel.app/cursos" style="display: inline-block; background: #8b5cf6; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; margin: 24px 0;">Conhecer a Trilha IA</a>
              <p style="color: #64748b; font-size: 14px; margin-top: 24px;">Se você não se inscreveu para receber este material, ignore este e-mail.</p>
            </div>
          </body>
        </html>
      `
        });

        return res.status(200).json({ message: 'Email enviado com sucesso' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao enviar email' });
    }
}