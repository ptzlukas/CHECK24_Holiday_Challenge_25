import requests
import csv
import time

API_KEY=""

def geocode_hotel(name):
    base_url = "https://maps.googleapis.com/maps/api/geocode/json"
    params = {
        "address": f"{name}, Mallorca, Spain",
        "key": API_KEY
    }

    response = requests.get(base_url, params=params)
    data = response.json()

    if data["status"] == "OK":
        result = data["results"][0]
        lat = result["geometry"]["location"]["lat"]
        lon = result["geometry"]["location"]["lng"]
        address = result["formatted_address"]
        return lat, lon, address
    else:
        print(f"[WARN] Kein Ergebnis für: {name} ({data['status']})")
        return None, None, None

def enrich_hotels(input_file="../data/hotels.csv", output_file="hotels_enriched.csv"):
    with open(input_file, newline='', encoding="utf-8") as infile, \
         open(output_file, mode="w", newline='', encoding="utf-8") as outfile:

        reader = csv.DictReader(infile, delimiter=';')
        fieldnames = reader.fieldnames + ["lat", "lon", "address"]
        writer = csv.DictWriter(outfile, fieldnames=fieldnames)
        writer.writeheader()

        for row in reader:
            hotel_name = row["hotelname"]
            print(f"[INFO] Suche: {hotel_name}")
            lat, lon, address = geocode_hotel(hotel_name)
            row["lat"] = lat
            row["lon"] = lon
            row["address"] = address
            writer.writerow(row)
            time.sleep(0.2)  # kleine Pause zur Sicherheit gegen Rate-Limit

if __name__ == "__main__":
    enrich_hotels()
