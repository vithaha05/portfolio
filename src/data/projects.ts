import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "stockiq",
    title: "StockIQ",
    category: "Non-Academic",
    domain: "Financial Analytics",
    problem: "Manual equity research is slow and unstructured.",
    solution:
      "End-to-end pipeline ingesting financial statements via yfinance, computing ROE, ROA, Debt-to-Equity, and revenue growth. It applies rule-based insight generation, news sentiment analysis, and auto-generates PDF research reports with publication-quality visualizations.",
    stack: ["Python", "yfinance", "Pandas", "NLP", "Matplotlib", "FPDF"],
    github: "https://github.com/vithaha05/Equity-research-generator",
    accent: "#7C6FF7",
  },
  {
    id: "fraudulens",
    title: "FrauduLens",
    category: "Non-Academic",
    domain: "Fraud Detection",
    problem: "Transaction fraud hides in network-level patterns that tabular ML misses.",
    solution:
      "Combined NetworkX graph feature extraction with XGBoost classification to catch complex fraud patterns. The system includes centrality, clique detection, a Streamlit dashboard, and Docker deployment.",
    stack: ["Python", "XGBoost", "NetworkX", "Streamlit", "Docker"],
    github: "https://github.com/vithaha05/CreditCardFraud",
    accent: "#2DD4A0",
  },
  {
    id: "bizquery-ai",
    title: "BizQuery AI",
    category: "Non-Academic",
    domain: "RAG / LLM",
    problem: "Enterprise documents are unstructured and unsearchable.",
    solution:
      "RAG pipeline using LangChain, OpenAI embeddings, and FAISS/Chroma for intelligent querying over PDFs, CSVs, and TXTs. It supports semantic chunking, vector indexing, conversational retrieval with memory, and source citation.",
    stack: ["LangChain", "OpenAI", "FAISS", "Chroma", "Python"],
    github: "https://github.com/vithaha05/business-data-chatbot-rag",
    accent: "#F59E0B",
  },
  {
    id: "machinsight",
    title: "MachInsight",
    category: "Academic",
    domain: "Predictive Maintenance",
    problem: "Industrial equipment failures are costly and unpredictable.",
    solution:
      "Rolling-window telemetry feature engineering powers Random Forest failure prediction and Isolation Forest anomaly detection. A GenAI layer generates natural language maintenance reports for clearer operational decisions.",
    stack: ["Python", "Scikit-learn", "Random Forest", "Isolation Forest", "GenAI"],
    github: "https://github.com/vithaha05/telemetry-asset-health",
    accent: "#A78BFA",
  },
  {
    id: "mindguard",
    title: "MindGuard",
    category: "Academic",
    domain: "Mental Health AI",
    problem: "Mental health risk screening lacks accessible, explainable tooling.",
    solution:
      "Ensemble classifier combining Random Forest, XGBoost, and PyTorch MLP predicts Low, Moderate, and High risk. SMOTE handles class imbalance, while a Streamlit dashboard surfaces SHAP-based local and global explainability.",
    stack: ["PyTorch", "XGBoost", "SMOTE", "SHAP", "Streamlit"],
    github: "https://github.com/vithaha05/MentalHealthRiskPredictor",
    accent: "#38BDF8",
  },
  {
    id: "retailflow",
    title: "RetailFlow",
    category: "Academic",
    domain: "Data Engineering",
    problem: "Raw retail data is messy and analytics-unready.",
    solution:
      "Modular ETL pipeline covers ingestion, quality checks, feature engineering, and SQLite loading. It enables downstream analytics on revenue trends, product performance, and regional sales.",
    stack: ["Python", "Pandas", "SQLite", "SQLAlchemy"],
    github: "https://github.com/vithaha05/retail-etl-pipeline",
    accent: "#FB7185",
  },
];
