import { BarChart3, TrendingUp, AlertCircle, Target } from 'lucide-react';

export function Metrics() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-semibold mb-3 text-slate-900">Métricas Essenciais</h2>
        <p className="text-lg text-slate-600">
          Indicadores simples para aprender e melhorar. Foco em sustentabilidade, não vigilância.
        </p>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8">
        <h3 className="font-semibold text-slate-900 mb-4">Por que medir?</h3>
        <p className="text-slate-700 mb-6">
          Métricas não servem para vigiar designers. Servem para identificar padrões, gargalos e oportunidades de melhoria no sistema. O objetivo é aprendizado coletivo, não performance individual.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">Volume</div>
            <p className="text-sm text-slate-700">Entender capacidade</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-amber-600 mb-1">Retrabalho</div>
            <p className="text-sm text-slate-700">Identificar causas raiz</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">Gargalos</div>
            <p className="text-sm text-slate-700">Resolver bloqueios</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Métrica 1 */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Volume de Entregas por Tipo de Conta</h4>
              <p className="text-sm text-slate-600">Quantas entregas fizemos por tipo de conta (A, B, C) no mês?</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-3">O que medir</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Total de entregas finalizadas no mês</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Distribuição por tipo de conta (A, B, C)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Média de entregas por designer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">•</span>
                  <span>Tempo médio por tipo de entrega</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-3">Para que serve</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Entender capacidade real do time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Identificar desbalanceamento de carga</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Planejar contratações ou realocar recursos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Negociar expectativas com clientes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-blue-100 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-slate-800">
              <strong>Exemplo:</strong> "No último mês, fizemos 45 entregas: 5 Tipo A, 25 Tipo B, 15 Tipo C. Designer X fez 8 entregas (sobrecarga), Designer Y fez 2 (subutilizado)."
            </p>
          </div>
        </div>

        {/* Métrica 2 */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Taxa de Retrabalho</h4>
              <p className="text-sm text-slate-600">Quantas entregas precisaram de mais de 2 rodadas de ajuste?</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-3">O que medir</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">•</span>
                  <span>% de entregas com 3+ rodadas de ajuste</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">•</span>
                  <span>Motivos do retrabalho (briefing ruim, erro técnico, mudança de escopo, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">•</span>
                  <span>Retrabalho por tipo de conta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">•</span>
                  <span>Tempo gasto em retrabalho vs. primeira entrega</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-3">Para que serve</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Identificar problemas de briefing ou comunicação</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Melhorar processo de validação interna</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Treinar clientes em como dar feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Reduzir desperdício de tempo do time</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-amber-100 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-slate-800">
              <strong>Exemplo:</strong> "15% das entregas tipo B tiveram 3+ rodadas de ajuste. Principal motivo: briefing incompleto (60%). Ação: revisar template de briefing."
            </p>
          </div>
        </div>

        {/* Métrica 3 */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Gargalos e Atrasos</h4>
              <p className="text-sm text-slate-600">Onde o trabalho está travando ou atrasando?</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-3">O que medir</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>% de entregas com atraso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Etapa onde mais ocorrem atrasos (triagem, produção, revisão, aprovação)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Motivos de atraso (sobrecarga, briefing ruim, cliente, processo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">•</span>
                  <span>Tempo médio de espera em cada etapa</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-3">Para que serve</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Identificar pontos de ineficiência no processo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Resolver gargalos de aprovação com cliente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Realocar recursos para etapas congestionadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Melhorar previsibilidade de entregas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-red-100 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-slate-800">
              <strong>Exemplo:</strong> "30% dos atrasos acontecem na etapa de aprovação com cliente (média 3 dias de espera). Ação: criar SLA de resposta com clientes."
            </p>
          </div>
        </div>

        {/* Métrica 4 */}
        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Satisfação de Cliente e Designer</h4>
              <p className="text-sm text-slate-600">Cliente e time estão satisfeitos com o resultado?</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-3">O que medir</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>NPS ou satisfação do cliente (escala simples)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>Feedback qualitativo dos clientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>Satisfação do designer com o processo (mensal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>Nível de burnout ou sobrecarga (auto-relatado)</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-semibold text-slate-900 mb-3">Para que serve</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Garantir que clientes estão felizes com entregas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Identificar designers em risco de burnout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Ajustar alocação ou processos para saúde do time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">→</span>
                  <span>Manter cultura de qualidade sustentável</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-emerald-100 border border-emerald-200 rounded-lg p-4">
            <p className="text-sm text-slate-800">
              <strong>Exemplo:</strong> "NPS médio de clientes: 8.5/10 (bom). Designer Y reportou sobrecarga (8/10). Ação: redistribuir 1 conta de Y para Z."
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white rounded-xl p-8">
        <h3 className="font-semibold mb-4">Como usar as métricas</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">✓ Faça</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>Revise métricas mensalmente na retrospectiva</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>Foque em padrões, não casos isolados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>Use para identificar causas raiz, não culpados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>Transforme insights em ações concretas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>Compartilhe métricas com transparência</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-200 mb-3">× Não faça</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">•</span>
                <span>Usar métricas para cobrar indivíduos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">•</span>
                <span>Criar ranking de produtividade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">•</span>
                <span>Medir por medir, sem usar dados para melhorar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">•</span>
                <span>Esconder métricas do time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">•</span>
                <span>Ignorar feedback qualitativo em favor de números</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-8">
        <h3 className="font-semibold text-slate-900 mb-4">Ferramentas Simples para Tracking</h3>
        <p className="text-slate-700 mb-4">
          Você não precisa de sistema complexo. Uma planilha simples ou ferramenta de gestão de projeto já resolve.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm font-medium text-slate-900 mb-2">Planilha Google Sheets</div>
            <p className="text-xs text-slate-600">Para volume, retrabalho e atrasos básicos</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm font-medium text-slate-900 mb-2">Monday / Asana / Trello</div>
            <p className="text-xs text-slate-600">Para tracking de pipeline e status de entregas</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm font-medium text-slate-900 mb-2">Formulários Google Forms</div>
            <p className="text-xs text-slate-600">Para coletar satisfação de clientes e designers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
