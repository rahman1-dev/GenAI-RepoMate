import React from "react";

const AnalysisPage = ({ queryResp }) => {
  const { AI_Summary, message, releventFiles = [] } = queryResp ?? {};
  // releventFiles is array [{fileName,fileSummary,similarityScore,sourceCode}]
  return (
    <main className="min-h-[calc(100vh-73px)] bg-stone-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        {/* Page header */}
        <header className="mb-8 flex flex-col gap-4 border-b border-stone-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold text-blue-600">
              repoMate analysis
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
              Codebase Analysis
            </h1>
            <p className="mt-2 text-sm text-stone-500">
              AI-powered insights from your project files.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Analysis status
          </div>
        </header>

        {/* Overview cards */}
        <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="min-w-0 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            {message} ✅
          </div>
          <div className="min-w-0 rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            Similarity Score : {Math.floor(
              (Number(releventFiles[0]?.similarityScore).toFixed(1) * 10) % 10,
            )}/10
            {/* {Math.floor(Number(releventFiles[0]?.similarityScore) * 10) % 10} */}
          </div>
          {/* <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"></div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"></div> */}
        </section>

        {/* AI summary */}
        <section className="mb-8 rounded-xl border border-stone-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-5 flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-700">
              AI
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                AI analysis
              </p>
              <h2 className="mt-1 text-lg font-semibold text-stone-900">
                Summary
              </h2>
            </div>
          </div>

          <div className="min-h-32 whitespace-pre-wrap wrap-break-word rounded-lg bg-stone-50 p-4 text-sm leading-7 text-stone-700 sm:p-5">
            {AI_Summary}
          </div>
        </section>

        {/* Relevant files */}
        <section>
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                Evidence
              </p>
              <h2 className="mt-1 text-lg font-semibold text-stone-900">
                Relevant files
              </h2>
            </div>

            <p className="text-sm text-stone-500">Sorted by similarity</p>
          </div>

          <div className="space-y-4">
            {/* Relevant file card structure */}
            {releventFiles.map((detObj, index) => {
              return (
                <div key={index}>
                  <article className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm">
                    <div className="flex min-w-0 flex-col gap-5 border-b border-stone-100 p-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">
                          Relevant file
                        </p>
                        <div className="min-h-5 w-full max-w-full break-all rounded bg-stone-50 text-sm font-medium text-stone-800">
                          {detObj?.fileName}
                        </div>
                      </div>
                      <div className="w-full max-w-xs">
                        <div className="mb-2 flex justify-between text-xs text-stone-500">
                          <span>Similarity</span>
                          <span>Score</span>
                        </div>
                        <div className="h-2 rounded-full bg-stone-100">
                          <div className="h-2 w-3/4 rounded-full bg-blue-600" />
                        </div>
                      </div>
                    </div>

                    <div className="grid min-w-0 gap-6 p-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                      <div className="min-w-0">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">
                          {/* {detObj.fileSummary} */}
                          File summary
                        </p>
                        <div className="space-y-2">
                          <div className="min-h-12 whitespace-pre-wrap wrap-break-word rounded-lg bg-stone-50 p-4 text-sm leading-6 text-stone-700">
                            {detObj?.fileSummary}
                          </div>
                          {/* <div className="h-3 rounded bg-slate-100" />
                          <div className="h-3 w-4/5 rounded bg-slate-100" /> */}
                        </div>
                      </div>

                      {/* Source code viewer structure */}
                      <div className="min-w-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
                        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
                          <div className="h-3 w-32 rounded bg-slate-800" />
                          <span className="text-xs text-slate-500">
                            Source code
                          </span>
                        </div>
                        <div className="max-h-96 overflow-auto p-4 text-xs leading-6 text-slate-300">
                          <div className="whitespace-pre-wrap wrap-break-word">
                            {detObj?.sourceCode}
                          </div>
                          {/* <div className="h-3 w-2/5 rounded bg-slate-800" />
                          <div className="h-3 w-3/5 rounded bg-slate-800" /> */}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AnalysisPage;
