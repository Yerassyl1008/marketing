"use client";

import { useEffect, useMemo, useState } from "react";

type ColumnId = "new" | "inProgress" | "agreed" | "rejected";

interface Lead {
  id: string;
  name: string;
  phone: string;
  status: ColumnId;
  comment: string;
}

interface ColumnMeta {
  id: ColumnId;
  title: string;
}

const COLUMNS: ColumnMeta[] = [
  { id: "new", title: "1. Новые заявки" },
  { id: "inProgress", title: "2. Заявки в работе" },
  { id: "agreed", title: "3. Клиент согласился работать" },
  { id: "rejected", title: "4. Нельзя связаться / не согласен работать" },
];

const INITIAL_LEADS: Lead[] = [
  { id: "lead-1", name: "Алина Смирнова", phone: "+7 777 101 22 33", status: "new", comment: "" },
  { id: "lead-2", name: "Ерлан Т.", phone: "+7 777 222 11 90", status: "new", comment: "" },
  { id: "lead-3", name: "Мария Соколова", phone: "+7 707 456 77 88", status: "inProgress", comment: "Запросила КП" },
  { id: "lead-4", name: "Алексей Петров", phone: "+7 701 901 22 10", status: "agreed", comment: "Старт в понедельник" },
];

const STORAGE_KEY = "marketing-admin-leads";

export function Column() {
  const [leads, setLeads] = useState<Lead[]>(INITIAL_LEADS);
  const [draggedLeadId, setDraggedLeadId] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw) as Lead[];
      if (!Array.isArray(parsed)) return;

      const validStatuses: ColumnId[] = ["new", "inProgress", "agreed", "rejected"];
      const normalized = parsed.filter(
        (lead) =>
          lead &&
          typeof lead.id === "string" &&
          typeof lead.name === "string" &&
          typeof lead.phone === "string" &&
          typeof lead.comment === "string" &&
          validStatuses.includes(lead.status)
      );

      if (normalized.length > 0) {
        setLeads(normalized);
      }
    } catch {
      // Ignore broken localStorage data and keep defaults.
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    } catch {
      // Ignore quota/localStorage access errors.
    }
  }, [leads]);

  const grouped = useMemo(() => {
    return COLUMNS.map((column) => ({
      ...column,
      items: leads.filter((lead) => lead.status === column.id),
    }));
  }, [leads]);

  const moveLead = (leadId: string, nextStatus: ColumnId) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === leadId ? { ...lead, status: nextStatus } : lead))
    );
  };

  const handleDrop = (columnId: ColumnId) => {
    if (!draggedLeadId) return;
    moveLead(draggedLeadId, columnId);
    setDraggedLeadId(null);
  };

  const updateComment = (leadId: string, comment: string) => {
    setLeads((prev) => prev.map((lead) => (lead.id === leadId ? { ...lead, comment } : lead)));
  };

  return (
    <section className="rounded-[28px] bg-[var(--team-surface)] p-3 shadow-sm sm:p-4 md:rounded-[36px] md:p-6">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-xl font-extrabold text-[var(--foreground)] md:text-2xl">CRM воронка</h2>
        <span className="rounded-full bg-[var(--design-btn)] px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
          {leads.length} клиентов
        </span>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {grouped.map((column) => (
          <div
            key={column.id}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => handleDrop(column.id)}
            className="min-h-[260px] rounded-2xl border border-black/5 bg-[var(--background)] p-3 dark:border-white/10"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="text-sm font-bold leading-5 text-[var(--foreground)]">{column.title}</h3>
              <span className="rounded-full bg-[var(--projects-span-bg)] px-2 py-1 text-xs text-[var(--design-muted)]">
                {column.items.length}
              </span>
            </div>

            <div className="space-y-3">
              {column.items.map((lead) => (
                <article
                  key={lead.id}
                  draggable
                  onDragStart={() => setDraggedLeadId(lead.id)}
                  onDragEnd={() => setDraggedLeadId(null)}
                  className="cursor-grab rounded-xl border border-black/5 bg-[var(--team-surface)] p-3 active:cursor-grabbing dark:border-white/10"
                >
                  <p className="text-sm font-semibold text-[var(--foreground)]">{lead.name}</p>
                  <p className="mt-1 text-xs text-[var(--design-muted)]">{lead.phone}</p>

                  <label className="mt-3 block text-xs font-medium text-[var(--design-muted)]">
                    Комментарий
                    <textarea
                      value={lead.comment}
                      onChange={(event) => updateComment(lead.id, event.target.value)}
                      rows={3}
                      className="mt-1 w-full resize-none rounded-lg border border-black/10 bg-[var(--background)] px-2 py-2 text-xs text-[var(--foreground)] outline-none placeholder:text-[var(--design-muted)] focus:border-[var(--design-btn)] dark:border-white/20"
                      placeholder="Добавьте комментарий..."
                    />
                  </label>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
