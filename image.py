#!/usr/bin/env python3
"""
Ice Website Image Downloader
Downloads high-quality images for ice business website from Unsplash API
"""

import requests
import os
from pathlib import Path
import time
from typing import Dict, List, Tuple
import json

class IceImageDownloader:
    def __init__(self, access_key: str = None):
        """
        Initialize the image downloader
        
        Args:
            access_key: Unsplash API access key (get free at https://unsplash.com/developers)
        """
        self.access_key = access_key
        self.base_url = "https://api.unsplash.com"
        self.download_dir = Path("ice_website_images")
        self.download_dir.mkdir(exist_ok=True)
        
        # Create subdirectories
        self.subdirs = {
            'products': self.download_dir / 'products',
            'business': self.download_dir / 'business', 
            'events': self.download_dir / 'events',
            'team': self.download_dir / 'team',
            'sustainability': self.download_dir / 'sustainability'
        }
        
        for subdir in self.subdirs.values():
            subdir.mkdir(exist_ok=True)
    
    def get_image_requirements(self) -> Dict[str, Dict]:
        """Define all image requirements with search terms and categories"""
        return {
            # Ice Product Images
            'hero-ice.jpg': {
                'size': (1200, 800),
                'search_terms': ['ice cubes crystal clear', 'premium ice background', 'ice crystals macro'],
                'category': 'products',
                'orientation': 'landscape'
            },
            'cube-ice.jpg': {
                'size': (600, 400),
                'search_terms': ['crystal clear ice cubes', 'perfect ice cubes', 'transparent ice'],
                'category': 'products',
                'orientation': 'landscape'
            },
            'sphere-ice.jpg': {
                'size': (600, 400),
                'search_terms': ['ice sphere cocktail', 'round ice ball', 'whiskey ice sphere'],
                'category': 'products',
                'orientation': 'landscape'
            },
            'collins-ice.jpg': {
                'size': (600, 400),
                'search_terms': ['long ice sticks', 'collins ice', 'tall glass ice'],
                'category': 'products',
                'orientation': 'landscape'
            },
            'custom-ice.jpg': {
                'size': (600, 400),
                'search_terms': ['custom ice shapes', 'artisan ice', 'specialty ice'],
                'category': 'products',
                'orientation': 'landscape'
            },
            'ice-production.jpg': {
                'size': (1200, 350),
                'search_terms': ['ice factory', 'ice manufacturing', 'industrial ice production'],
                'category': 'products',
                'orientation': 'landscape'
            },
            
            # Business Images
            'business-ice.jpg': {
                'size': (600, 400),
                'search_terms': ['commercial ice service', 'business ice delivery', 'restaurant ice'],
                'category': 'business',
                'orientation': 'landscape'
            },
            'home-ice.jpg': {
                'size': (600, 400),
                'search_terms': ['home ice delivery', 'residential ice service', 'home bar ice'],
                'category': 'business',
                'orientation': 'landscape'
            },
            'home-bar.jpg': {
                'size': (600, 400),
                'search_terms': ['home bar setup', 'cocktail bar home', 'whiskey bar home'],
                'category': 'business',
                'orientation': 'landscape'
            },
            'gift-package.jpg': {
                'size': (600, 400),
                'search_terms': ['gift packaging luxury', 'premium gift box', 'elegant packaging'],
                'category': 'business',
                'orientation': 'landscape'
            },
            
            # Event Images
            'home-entertaining.jpg': {
                'size': (400, 200),
                'search_terms': ['home party entertaining', 'cocktail party home', 'friends gathering drinks'],
                'category': 'events',
                'orientation': 'landscape'
            },
            'corporate-events.jpg': {
                'size': (400, 200),
                'search_terms': ['corporate event catering', 'business event drinks', 'office party'],
                'category': 'events',
                'orientation': 'landscape'
            },
            'wedding-events.jpg': {
                'size': (400, 200),
                'search_terms': ['wedding bar service', 'elegant wedding drinks', 'wedding cocktails'],
                'category': 'events',
                'orientation': 'landscape'
            },
            
            # Team/People Images
            'about-team.jpg': {
                'size': (600, 400),
                'search_terms': ['team working together', 'business team collaboration', 'professional team'],
                'category': 'team',
                'orientation': 'landscape'
            },
            'team-1.jpg': {
                'size': (300, 250),
                'search_terms': ['professional headshot man', 'business portrait male', 'confident businessman'],
                'category': 'team',
                'orientation': 'portrait'
            },
            'team-2.jpg': {
                'size': (300, 250),
                'search_terms': ['professional headshot woman', 'business portrait female', 'confident businesswoman'],
                'category': 'team',
                'orientation': 'portrait'
            },
            'team-3.jpg': {
                'size': (300, 250),
                'search_terms': ['professional headshot man', 'business portrait male', 'friendly businessman'],
                'category': 'team',
                'orientation': 'portrait'
            },
            'testimonial-1.jpg': {
                'size': (100, 100),
                'search_terms': ['happy customer woman', 'satisfied client female', 'smiling woman portrait'],
                'category': 'team',
                'orientation': 'squarish'
            },
            'testimonial-2.jpg': {
                'size': (100, 100),
                'search_terms': ['happy customer man', 'satisfied client male', 'smiling man portrait'],
                'category': 'team',
                'orientation': 'squarish'
            },
            'testimonial-3.jpg': {
                'size': (100, 100),
                'search_terms': ['happy customer man', 'satisfied client male', 'friendly man portrait'],
                'category': 'team',
                'orientation': 'squarish'
            },
            
            # Sustainability
            'sustainability.jpg': {
                'size': (600, 400),
                'search_terms': ['eco friendly packaging', 'sustainable business', 'green packaging'],
                'category': 'sustainability',
                'orientation': 'landscape'
            }
        }
    
    def search_images(self, query: str, orientation: str = 'landscape', per_page: int = 10) -> List[Dict]:
        """Search for images using Unsplash API"""
        if not self.access_key:
            print("⚠️  No Unsplash API key provided. Get one free at https://unsplash.com/developers")
            return []
        
        headers = {
            'Authorization': f'Client-ID {self.access_key}'
        }
        
        params = {
            'query': query,
            'orientation': orientation,
            'per_page': per_page,
            'order_by': 'relevant'
        }
        
        try:
            response = requests.get(f"{self.base_url}/search/photos", headers=headers, params=params)
            response.raise_for_status()
            return response.json().get('results', [])
        except requests.RequestException as e:
            print(f"❌ Error searching for '{query}': {e}")
            return []
    
    def download_image(self, image_data: Dict, filename: str, target_dir: Path) -> bool:
        """Download an image from Unsplash"""
        try:
            # Get the highest quality image URL
            image_url = image_data['urls']['full']
            
            # Trigger download (required by Unsplash API terms)
            if self.access_key:
                download_url = image_data['links']['download_location']
                headers = {'Authorization': f'Client-ID {self.access_key}'}
                requests.get(download_url, headers=headers)
            
            # Download the actual image
            img_response = requests.get(image_url, stream=True)
            img_response.raise_for_status()
            
            # Save the image
            filepath = target_dir / filename
            with open(filepath, 'wb') as f:
                for chunk in img_response.iter_content(chunk_size=8192):
                    f.write(chunk)
            
            print(f"✅ Downloaded: {filename}")
            return True
            
        except requests.RequestException as e:
            print(f"❌ Failed to download {filename}: {e}")
            return False
    
    def find_and_download_image(self, filename: str, requirements: Dict) -> bool:
        """Find and download the best image for given requirements"""
        print(f"\n🔍 Searching for: {filename}")
        
        category = requirements['category']
        target_dir = self.subdirs[category]
        orientation = requirements['orientation']
        
        # Try each search term until we find a good image
        for search_term in requirements['search_terms']:
            print(f"   Trying search term: '{search_term}'")
            
            images = self.search_images(search_term, orientation)
            
            if images:
                # Get the best image (first result is usually best)
                best_image = images[0]
                
                # Check if image dimensions are reasonable
                width = best_image.get('width', 0)
                height = best_image.get('height', 0)
                target_width, target_height = requirements['size']
                
                # Accept images that are at least the target size
                if width >= target_width and height >= target_height:
                    if self.download_image(best_image, filename, target_dir):
                        return True
                
                # If first image doesn't meet size requirements, try others
                for image in images[1:3]:  # Try up to 3 images
                    width = image.get('width', 0)
                    height = image.get('height', 0)
                    if width >= target_width and height >= target_height:
                        if self.download_image(image, filename, target_dir):
                            return True
            
            time.sleep(1)  # Rate limiting
        
        print(f"❌ Could not find suitable image for {filename}")
        return False
    
    def download_all_images(self):
        """Download all required images"""
        print("🚀 Starting image download for ice website...")
        print(f"📁 Images will be saved to: {self.download_dir.absolute()}")
        
        requirements = self.get_image_requirements()
        
        successful_downloads = 0
        total_images = len(requirements)
        
        for filename, req in requirements.items():
            if self.find_and_download_image(filename, req):
                successful_downloads += 1
            time.sleep(2)  # Rate limiting between requests
        
        print(f"\n📊 Download Summary:")
        print(f"✅ Successfully downloaded: {successful_downloads}/{total_images} images")
        print(f"📁 Images saved in: {self.download_dir.absolute()}")
        
        # Create a summary report
        self.create_summary_report(successful_downloads, total_images)
    
    def create_summary_report(self, successful: int, total: int):
        """Create a summary report of downloaded images"""
        report = {
            'summary': {
                'total_images_needed': total,
                'successfully_downloaded': successful,
                'success_rate': f"{(successful/total)*100:.1f}%"
            },
            'directory_structure': {
                'base_directory': str(self.download_dir),
                'subdirectories': {name: str(path) for name, path in self.subdirs.items()}
            },
            'next_steps': [
                "Review downloaded images for quality and suitability",
                "Replace any images that don't meet your needs",
                "Resize images if needed for web optimization", 
                "Consider hiring a photographer for custom team photos",
                "Add alt text and optimize images for web use"
            ]
        }
        
        report_file = self.download_dir / 'download_report.json'
        with open(report_file, 'w') as f:
            json.dump(report, f, indent=2)
        
        print(f"📋 Download report saved to: {report_file}")

def main():
    """Main function to run the image downloader"""
    print("🧊 Ice Website Image Downloader")
    print("=" * 50)
    
    # Get Unsplash API key
    api_key = input("Enter your Unsplash API key (or press Enter to skip): ").strip()
    
    if not api_key:
        print("\n⚠️  No API key provided.")
        print("To download images, you need a free Unsplash API key:")
        print("1. Go to https://unsplash.com/developers")
        print("2. Create a free account")
        print("3. Create a new application")
        print("4. Copy your Access Key")
        print("\nRunning in demo mode (no downloads)...")
        
        # Show what would be downloaded
        downloader = IceImageDownloader()
        requirements = downloader.get_image_requirements()
        
        print(f"\nImages that would be downloaded ({len(requirements)} total):")
        for filename, req in requirements.items():
            print(f"  📸 {filename} ({req['size'][0]}x{req['size'][1]}) - {req['category']}")
        
        return
    
    # Create downloader and start downloading
    downloader = IceImageDownloader(api_key)
    downloader.download_all_images()
    
    print("\n🎉 Image download process completed!")
    print("Check the 'ice_website_images' folder for your downloaded images.")

if __name__ == "__main__":
    main()