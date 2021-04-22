curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "product": {
      "name": "'"${NAME}"'",
      "price": "'"${PRICE}"'"
    }
  }'

echo
