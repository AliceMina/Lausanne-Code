if [ -z "$1" ]; then
  echo "Usage: $0 <nom_du_dossier>"
  exit 1
fi
# Créer le dossier avec le préfixe 'ex'
mkdir "ex$1"
echo "Dossier 'ex$1' créé avec succès."
