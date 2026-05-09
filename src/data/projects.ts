import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "StockIQ",
    category: "Non-Academic",
    domain: "Financial Analytics",
    description:
      "End-to-end financial analytics pipeline ingesting statements and market data via yfinance. Computes ROE, ROA, Debt-to-Equity, revenue growth, rule-based insights, news sentiment, and PDF research reports with visualizations.",
    stack: ["Python", "yfinance", "Pandas", "NLP", "Matplotlib"],
    github: "https://github.com/vithaha05/Equity-research-generator",
  },
  {
    title: "FrauduLens",
    category: "Non-Academic",
    domain: "Fraud Detection",
    description:
      "Fraud detection pipeline combining NetworkX graph feature extraction with XGBoost classification to identify complex transaction patterns, plus a Streamlit dashboard and Docker deployment.",
    stack: ["Python", "XGBoost", "NetworkX", "Streamlit", "Docker"],
    github: "https://github.com/vithaha05/CreditCardFraud",
  },
  {
    title: "BizQuery AI",
    category: "Non-Academic",
    domain: "RAG / LLM",
    description:
      "RAG pipeline using LangChain, OpenAI embeddings, and FAISS/Chroma for intelligent querying over enterprise PDF, CSV, and TXT documents with memory and source citation.",
    stack: ["LangChain", "OpenAI", "FAISS", "Chroma", "Python"],
    github: "https://github.com/vithaha05/business-data-chatbot-rag",
  },
  {
    title: "MachInsight",
    category: "Academic",
    domain: "Predictive Maintenance",
    description:
      "Predictive maintenance system with rolling-window telemetry features, Random Forest failure prediction, Isolation Forest anomaly detection, and GenAI maintenance reports.",
    stack: ["Python", "Random Forest", "Isolation Forest", "GenAI"],
    github: "https://github.com/vithaha05/telemetry-asset-health",
  },
  {
    title: "MindGuard",
    category: "Academic",
    domain: "Mental Health AI",
    description:
      "Mental health risk classifier using an ensemble of Random Forest, XGBoost, and PyTorch MLP with SMOTE, preprocessing, Streamlit dashboard, and explainability.",
    stack: ["PyTorch", "XGBoost", "SMOTE", "Streamlit"],
    github: "https://github.com/vithaha05/MentalHealthRiskPredictor",
  },
  {
    title: "RetailFlow",
    category: "Academic",
    domain: "Data Engineering",
    description:
      "Modular ETL pipeline ingesting raw retail CSVs, applying data quality checks, engineering sales features, and loading clean data into SQLite for analytics.",
    stack: ["Python", "Pandas", "SQLite"],
    github: "https://github.com/vithaha05/retail-etl-pipeline",
  },
];
