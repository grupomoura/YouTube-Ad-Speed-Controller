# YouTube Ad Speed Controller

Este é um plugin para Google Chrome que ajusta automaticamente a velocidade de reprodução de vídeos durante anúncios no YouTube, além de mutar o áudio durante os anúncios. Após o término do anúncio, o vídeo volta à velocidade normal (1x) e o áudio é desmutado, permitindo que o usuário ajuste manualmente a velocidade do vídeo sem interferências adicionais até que um novo anúncio seja iniciado.

## Funcionalidades

- **Ajuste Automático de Velocidade durante Anúncios:** Aumenta a velocidade do vídeo para 4x enquanto um anúncio está sendo reproduzido.
- **Mute Automático durante Anúncios:** Muta o áudio do vídeo durante anúncios.
- **Retorno Automático à Velocidade Normal:** Após o anúncio, a velocidade de reprodução retorna automaticamente para 1x e o áudio é desmutado.
- **Flexibilidade de Controle:** O usuário pode ajustar manualmente a velocidade de reprodução após o anúncio, sem que o script force a velocidade de volta para 1x.

## Instalação

Siga os passos abaixo para instalar o plugin no seu navegador Google Chrome:

### Passo 1: Baixar o Código

1. Clone ou baixe este repositório para o seu computador.

### Passo 2: Preparar o Arquivo Manifest

1. Certifique-se de que o arquivo `manifest.json` está na pasta raiz do projeto.
   ```json
   {
     "manifest_version": 3,
     "name": "YouTube Ad Speed Controller",
     "version": "1.0",
     "description": "Controla a velocidade de reprodução de vídeos durante anúncios no YouTube.",
     "permissions": ["activeTab", "webNavigation"],
     "content_scripts": [
       {
         "matches": ["*://www.youtube.com/*"],
         "js": ["content.js"]
       }
     ]
   }
   ```

### Passo 3: Carregar a Extensão no Chrome

1. Abra o Google Chrome e vá para `chrome://extensions/`.
2. Ative o **Modo de Desenvolvedor** no canto superior direito da página.
3. Clique em **"Carregar sem compactação"** e selecione a pasta onde você baixou/clonou o repositório.
4. A extensão será carregada e estará ativa.

### Passo 4: Testar a Extensão

1. Navegue para o YouTube e reproduza um vídeo.
2. Durante a reprodução de anúncios, o vídeo deve:
   - Aumentar a velocidade de reprodução para 4x.
   - Mutar o áudio.
3. Após o anúncio:
   - A velocidade deve voltar automaticamente para 1x.
   - O áudio deve ser desmutado.
   - O usuário deve poder ajustar manualmente a velocidade sem que o script altere novamente.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, faça um fork do repositório, realize as alterações desejadas e envie um pull request.

## Licença

Este projeto é licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.
