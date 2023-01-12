# Build and Deploy Image to Google Cloud Container Registry

```

# NOTICE: This automatically selects the first project, but should be set this manually.
export PROJECT_ID=$(gcloud projects list --format="value(PROJECT_ID)" --limit=1)

# Submit 
gcloud builds submit --project=${PROJECT_ID}



```
