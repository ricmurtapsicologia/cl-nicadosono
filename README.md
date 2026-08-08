# TCC-I na Prática Clínica

Sistema editorial clínico e educacional sobre Terapia Cognitivo-Comportamental para Insônia (TCC-I), destinado a psicólogos com formação prévia em TCC.

**Versão:** 1.0  
**Revisão das evidências:** agosto de 2026  
**Escopo central:** adultos com transtorno de insônia crônica; avaliação, formulação, intervenção, teleatendimento, comorbidades, prevenção de recaída e raciocínio clínico.

## Produtos

- Livro-web responsivo em `web/`, preparado para GitHub Pages.
- EPUB 3 refluível em `exports/tcci-pratica-clinica.epub`.
- PDF digital 17 × 24 cm em `exports/tcci-pratica-clinica-digital.pdf`.
- PDF print 17 × 24 cm em `exports/tcci-pratica-clinica-print.pdf`.
- Caderno Clínico A4 com 59 páginas em `exports/caderno-clinico-tcci.pdf`.
- Dez conjuntos de ferramentas clínicas individualizadas em `clinical-tools/`.
- Fonte-mestre em Markdown, base bibliográfica BibTeX, SVGs, CSS e scripts de build.

## Arquitetura

```text
conteúdo-mestre Markdown
        │
        ├── scripts/build_web.py ─────→ web/ (GitHub Pages)
        ├── scripts/build_book.py ────→ build/book.html
        │                                  ├→ PDF digital
        │                                  └→ PDF print
        ├── Pandoc ───────────────────→ EPUB 3
        └── scripts/build_workbook.py → Caderno Clínico A4
```

Uma correção científica deve ser feita no conteúdo-mestre e, em seguida, recompilada para as demais saídas.

## Estrutura do repositório

```text
content/            capítulos e elementos pré/pós-textuais
assets/             capa, ícones e diagramas originais
clinical-tools/     ferramentas clínicas em PDFs separados
references/         references.bib, Evidence Map e Evidence Audit
editorial/          Blueprint, voz, estilo, regras clínicas e acessibilidade
css/                estilos web, EPUB, PDF e caderno
js/                 busca, progresso local e marcadores
scripts/            geradores e processo de build
web/                site estático final
exports/            EPUB e PDFs finais
.github/workflows/  deploy do GitHub Pages
```

## Constituição editorial

A documentação normativa do projeto está em `editorial/`:

- `BLUEPRINT.md`
- `BOOK_ARCHITECTURE.md`
- `VOICE.md`
- `STYLE.md`
- `CLINICAL_RULES.md`
- `REFERENCES_POLICY.md`
- `TELEHEALTH.md`
- `ACCESSIBILITY.md`
- `ICONOGRAPHY.md`

Os capítulos seguem a trilha:

**problema → pergunta → conceito → mecanismo → reconhecimento → decisão → aplicação → feedback → recuperação ativa**.

## Base científica

A obra prioriza diretrizes e sínteses contemporâneas, integradas a trabalhos fundamentais. O mapa de evidências encontra-se em `references/EVIDENCE_MAP.md`; a auditoria de pontos críticos, em `references/EVIDENCE_AUDIT.md`.

Fontes estruturantes incluem:

- AASM Clinical Practice Guideline, 2021;
- European Insomnia Guideline, 2023;
- VA/DoD CPG para insônia crônica e AOS, 2025;
- Bootzin; Spielman; Morin; Harvey; Perlis/Posner; Edinger/Carney; Espie;
- evidência contemporânea sobre componentes, comorbidades e modalidades remotas/digitais;
- Resolução CFP nº 9/2024 para prática psicológica mediada por TDICs no Brasil.
