document.addEventListener('DOMContentLoaded', function() {
            const userToggle = document.getElementById('user-toggle');
            const adminToggle = document.getElementById('admin-toggle');
            const loginForm = document.querySelector('.login-form');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');

            // --- Credenciais Fictícias ---
            const MOCK_USER_EMAIL = 'aluno@academia.com';
            const MOCK_USER_PASS = '123456';
            const MOCK_ADMIN_EMAIL = 'admin@academia.com';
            const MOCK_ADMIN_PASS = 'admin123';
            // ------------------------------
            
            let isUserMode = true; // Define o modo inicial como Usuário

            // Lógica para alternar entre os modos
            userToggle.addEventListener('click', function() {
                userToggle.classList.add('active');
                adminToggle.classList.remove('active');
                isUserMode = true;
                console.log('Modo Usuário selecionado');
            });

            adminToggle.addEventListener('click', function() {
                adminToggle.classList.add('active');
                userToggle.classList.remove('active');
                isUserMode = false;
                console.log('Modo Administrador selecionado');
            });

            // Lógica de Login
            loginForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Impede o envio padrão do formulário
                
                const email = emailInput.value;
                const password = passwordInput.value;
                
                let success = false;
                let message = '';
                
                if (isUserMode) {
                    if (email === MOCK_USER_EMAIL && password === MOCK_USER_PASS) {
                        success = true;
                        message = 'Login de Usuário realizado com sucesso! 🎉';
                    } else {
                        message = 'Erro: Credenciais de Usuário inválidas. ❌';
                    }
                } else { // Modo Administrador
                    if (email === MOCK_ADMIN_EMAIL && password === MOCK_ADMIN_PASS) {
                        success = true;
                        message = 'Login de Administrador realizado com sucesso! ✅';
                    } else {
                        message = 'Erro: Credenciais de Administrador inválidas. 🛑';
                    }
                }

                // Feedback visual simples usando alert (em um app real, use uma mensagem na tela)
                alert(message);
                
                if (success) {
                    // Simulação: Redirecionar para a página principal após o login
                    // window.location.href = isUserMode ? 'dashboard-usuario.html' : 'dashboard-admin.html';
                    console.log('Redirecionando...');
                }
            });
        });
