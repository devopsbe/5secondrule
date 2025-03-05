"use client"

import { useState } from "react"
import { Check, ChevronDown, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"

export function RecipeFilters() {
  const [openCategories, setOpenCategories] = useState(true)
  const [openDifficulty, setOpenDifficulty] = useState(true)
  const [openTime, setOpenTime] = useState(true)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter))
    } else {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const clearAllFilters = () => {
    setActiveFilters([])
  }

  return (
    <div className="space-y-6 bg-white p-6 rounded-xl shadow-sm border border-deep-purple/5">
      <div className="pb-4 border-b border-deep-purple/10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-display text-deep-purple flex items-center">
            <Filter size={18} className="mr-2 text-bubblegum-pink" /> Filters
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            disabled={activeFilters.length === 0}
            className="text-bubblegum-pink hover:bg-bubblegum-pink/10 transition-colors px-2 h-8"
          >
            <X size={14} className="mr-1" /> Clear All
          </Button>
        </div>
        
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <Badge 
                key={filter}
                className="bg-bubblegum-pink/10 text-bubblegum-pink hover:bg-bubblegum-pink/20 px-3 py-1"
              >
                {filter}
                <button 
                  className="ml-2 hover:text-deep-purple transition-colors"
                  onClick={() => toggleFilter(filter)}
                >
                  <X size={12} />
                </button>
              </Badge>
            ))}
          </div>
        )}
      </div>

      <Collapsible open={openCategories} onOpenChange={setOpenCategories}>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium text-deep-purple group hover:text-bubblegum-pink transition-colors">
          Categories
          <ChevronDown 
            size={16} 
            className={`transition-transform group-hover:text-bubblegum-pink ${openCategories ? "rotate-180" : ""}`} 
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3 pb-4 space-y-3 pl-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="cakes" 
              checked={activeFilters.includes("Cakes & Pastries")}
              onCheckedChange={() => toggleFilter("Cakes & Pastries")}
              className="border-lime-green text-lime-green data-[state=checked]:bg-lime-green data-[state=checked]:text-white" 
            />
            <label htmlFor="cakes" className="text-sm cursor-pointer hover:text-bubblegum-pink transition-colors">
              Cakes & Pastries
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="cookies" 
              checked={activeFilters.includes("Cookies & Bars")}
              onCheckedChange={() => toggleFilter("Cookies & Bars")}
              className="border-warm-orange text-warm-orange data-[state=checked]:bg-warm-orange data-[state=checked]:text-white" 
            />
            <label htmlFor="cookies" className="text-sm cursor-pointer hover:text-bubblegum-pink transition-colors">
              Cookies & Bars
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="bread" 
              checked={activeFilters.includes("Bread & Dough")}
              onCheckedChange={() => toggleFilter("Bread & Dough")}
              className="border-sky-blue text-sky-blue data-[state=checked]:bg-sky-blue data-[state=checked]:text-white" 
            />
            <label htmlFor="bread" className="text-sm cursor-pointer hover:text-bubblegum-pink transition-colors">
              Bread & Dough
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="desserts" 
              checked={activeFilters.includes("Desserts")}
              onCheckedChange={() => toggleFilter("Desserts")}
              className="border-bubblegum-pink text-bubblegum-pink data-[state=checked]:bg-bubblegum-pink data-[state=checked]:text-white" 
            />
            <label htmlFor="desserts" className="text-sm cursor-pointer hover:text-bubblegum-pink transition-colors">
              Desserts
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="seasonal" 
              checked={activeFilters.includes("Seasonal Specials")}
              onCheckedChange={() => toggleFilter("Seasonal Specials")}
              className="border-bright-yellow text-bright-yellow data-[state=checked]:bg-bright-yellow data-[state=checked]:text-deep-purple" 
            />
            <label htmlFor="seasonal" className="text-sm cursor-pointer hover:text-bubblegum-pink transition-colors">
              Seasonal Specials
            </label>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openDifficulty} onOpenChange={setOpenDifficulty}>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium text-deep-purple group hover:text-bubblegum-pink transition-colors">
          Difficulty
          <ChevronDown 
            size={16} 
            className={`transition-transform group-hover:text-bubblegum-pink ${openDifficulty ? "rotate-180" : ""}`} 
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3 pb-4 space-y-3 pl-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="beginner" 
              checked={activeFilters.includes("Beginner")}
              onCheckedChange={() => toggleFilter("Beginner")}
              className="border-lime-green text-lime-green data-[state=checked]:bg-lime-green" 
            />
            <label htmlFor="beginner" className="text-sm cursor-pointer hover:text-bubblegum-pink transition-colors">
              Beginner
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="intermediate" 
              checked={activeFilters.includes("Intermediate")}
              onCheckedChange={() => toggleFilter("Intermediate")}
              className="border-warm-orange text-warm-orange data-[state=checked]:bg-warm-orange" 
            />
            <label htmlFor="intermediate" className="text-sm cursor-pointer hover:text-bubblegum-pink transition-colors">
              Intermediate
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="advanced" 
              checked={activeFilters.includes("Advanced")}
              onCheckedChange={() => toggleFilter("Advanced")}
              className="border-bubblegum-pink text-bubblegum-pink data-[state=checked]:bg-bubblegum-pink" 
            />
            <label htmlFor="advanced" className="text-sm cursor-pointer hover:text-bubblegum-pink transition-colors">
              Advanced
            </label>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openTime} onOpenChange={setOpenTime}>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium text-deep-purple group hover:text-bubblegum-pink transition-colors">
          Preparation Time
          <ChevronDown 
            size={16} 
            className={`transition-transform group-hover:text-bubblegum-pink ${openTime ? "rotate-180" : ""}`} 
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-3 pb-4 space-y-3 pl-2">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="under30" 
              checked={activeFilters.includes("Under 30 minutes")}
              onCheckedChange={() => toggleFilter("Under 30 minutes")}
              className="border-sky-blue text-sky-blue data-[state=checked]:bg-sky-blue" 
            />
            <label htmlFor="under30" className="text-sm cursor-pointer hover:text-bubblegum-pink transition-colors">
              Under 30 minutes
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="30to60" 
              checked={activeFilters.includes("30-60 minutes")}
              onCheckedChange={() => toggleFilter("30-60 minutes")}
              className="border-warm-orange text-warm-orange data-[state=checked]:bg-warm-orange" 
            />
            <label htmlFor="30to60" className="text-sm cursor-pointer hover:text-bubblegum-pink transition-colors">
              30-60 minutes
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="over60" 
              checked={activeFilters.includes("Over 60 minutes")}
              onCheckedChange={() => toggleFilter("Over 60 minutes")}
              className="border-bubblegum-pink text-bubblegum-pink data-[state=checked]:bg-bubblegum-pink" 
            />
            <label htmlFor="over60" className="text-sm cursor-pointer hover:text-bubblegum-pink transition-colors">
              Over 60 minutes
            </label>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

